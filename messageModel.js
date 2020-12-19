const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: Number
})

const Message = mongoose.model('Message', MessageSchema)

exports.newMessage = (name, email, message, timestamp) => {

    var message = new Message({
        userName: name,
        email: email,
        message: message,
        timestamp: timestamp
    })
}

exports.messageFind = async () => {
    let allMessages = await Message.find({});
    return allMessages;
}