
const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./contents/subfolder/first.txt', 'utf-8')
const secFile = readFileSync('./contents/second.txt', 'utf-8')

console.log(firstFile, secFile)

writeFileSync('./contents/result-sync.txt', ' showing that i can create a text file with node')