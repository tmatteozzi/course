import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import { render } from './render.js';

const forbiddenDirs = ['node_modules'];

class Runner {
    constructor(){
        this.testFiles = [];
    }

    async collectFiles(targetPath){
        // USING A BREADTH FIRST SEARCH (FILE STRUCTURE LIKE TREE)
        const files = await fs.promises.readdir(targetPath);
        for(let file of files){
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filepath);
            if(stats.isFile() && file.includes('.test.js')){
                this.testFiles.push({ name: filepath, shortName: file });
            } else if(stats.isDirectory() && !forbiddenDirs.includes(file)){
                const childFiles = await fs.promises.readdir(filepath);
                // ADD EACH CHILD FILE INDIVIDUALY TO FILES 
                files.push(...childFiles.map(f => path.join(file, f)));
            }
        }
    }
    
    async runTests(){
        for(let file of this.testFiles){
            console.log(chalk.grey(`--- ${file.shortName}`));
            const beforeEaches = [];
            global.render = render;
            // DEFINE BEFORE EACH
            global.beforeEach = (func) => {
                beforeEaches.push(func);
            };
            // DEFINE IT 
            global.it = async (desc, fn) => {
                beforeEaches.forEach(fn => fn());
                try {
                    await fn();
                    console.log(chalk.green(`\tOK - ${desc}`));
                } catch (err) {
                    const message = err.message.replace(/\n/g, '\n\t\t');
                    console.log(chalk.red(`\tX - ${desc}`));
                    console.log(chalk.red('\t',message));
                }
            };
            try {
                // REQUIRE WILL LOAD AND EXECUTE ALL CODE INSIDE THAT FILE
                const module = await import(file.name);
                if (module.runTest) {
                    await module.runTest();
                }
            } catch (err){
                console.log('X - Error loading file', file.name);
                console.log(chalk.red(err));
            }
        }
    }
};

export default Runner;