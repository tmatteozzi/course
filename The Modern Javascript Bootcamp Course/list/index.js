#!/usr/bin/env node

// IMPORTS
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
const { lstat } = fs.promises; 
// IF THERE IS AN EXTRA PARAM USE IT, ELSE USE CURREN DIR
const targetDir = process.argv[2] || process.cwd();
// READ DIR
fs.readdir(targetDir, async (err, filenames) => {
    if(err){
        console.log(err);
    }
    // ARRAY WITH ALL PROMISES
    const statPromises = filenames.map(filenames => {
        // RETURN STAT PROMISE
        return lstat(path.join(targetDir, filenames));
    });
    // ARRAY WITH STATS RESULTS
    const allStats = await Promise.all(statPromises);
    // FINAL RESULT
    for(let stats of allStats){
        const index = allStats.indexOf(stats);
        if(stats.isFile()){
            // REGULAR FILES
            console.log(filenames[index]);
        } else {
            // BOLD FOLDERS
            console.log(chalk.bold(filenames[index]));
        }
    }
});