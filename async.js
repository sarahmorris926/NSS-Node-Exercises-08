#!/usr/bin/env node
'use strict';

const {readFile} = require('fs');

const file = process.argv[2];

readFile(file, (err, data) => {
    if (err) throw err;
    process.stdout.write(`${data}\n`);
});