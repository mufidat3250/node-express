const {readFile, writeFile} = require('fs')

 readFile('./contents/subfolder/first.txt', 'utf-8', ((error, result)=> {
    if(error){
        console.log(error)
        return
    }
    const first = result

    writeFile('./contents/subfolder/first.txt', `Here is the result ${first}`, (error, result)=> {
        
    })

}))

console.log(firstFile)


