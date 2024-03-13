const generateID = (data)=> {
    console.log(data)
    const ids = data.map((data)=> data.id)
    console.log(ids)
    const max = Math.max(...ids)
    console.log({max})
    return max + 1
}
module.exports = generateID