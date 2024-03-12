const {readFile, writeFile} = require('fs').promises
const utils = require('util')

const readFilePromise = utils.promisify(readFile)
const writeFilePromise = utils.promisify(writeFile)
const getText =(text) => {
     return new Promise((resolve, reject )=> {
        readFile(text, 'utf-8', (error, data)=> {
            if(error){
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

const getNewData = async()=> {
    try {
    const first = await readFilePromise('./contents/subfolder/first.txt', 'utf-8')
    const second = await readFilePromise('./contents/result-sync.txt', 'utf-8')
    console.log(first, second)
    } catch (error) {
        console.log(error)
    }

}

getNewData()
