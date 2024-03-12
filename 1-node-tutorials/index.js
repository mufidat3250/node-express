const emitter = require('events')

const customEmitter = new emitter()

customEmitter.on('response', (name, number)=> {
    console.log(`Data recieved ${name}, ${number}`)
})

customEmitter.emit('response', 'Mufidat', '090505959')