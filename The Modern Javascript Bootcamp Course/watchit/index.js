#!/usr/bin/env node

import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import program from 'caporal';
import fs from 'fs';
import { spawn } from 'child_process';
import chalk from 'chalk';

program
    .version('0.0.1')
    .argument('[filename]', 'NAME OF A FILE TO EXECUTE')
    .action(async ({ filename }) => {
        const name = filename || index.js;
        try{
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`COULD NOT FIND THE FILE ${name}`);
        }
        // PROCESS VARIABLE SO IT CAN STOP EACH TIME IT CHANGES
        let proc;
        const start = debounce(() => {
            // IF THERE IS A PROCESS, KILL IT BEFORE STARTING AGAIN
            if (proc) {
                proc.kill();
            }
            console.log(chalk.green('>>> Starting process...'))
            proc = spawn('node', [name], { stdio: 'inherit' });
        }, 100)
        // FILE CHANGES
        chokidar.watch(".")
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
    });

program.parse(process.argv);

