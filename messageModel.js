const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    name: String,
    message: String,
    star: Number,
})

const Message = mongoose.model('Message', MessageSchema)

exports.newMessage = (name, message, number) => {

    var message = new Message({
        username: name,
        message: message,
        number:number
    })
}

exports.getAllMessages = async () => {
    let allMessages = await Message.find({}).sort({date: -1}).limit(6);
    return allMessages;
}