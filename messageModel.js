const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    username: String,
    message: String,
    stars: Number,
})

const Message = mongoose.model('Message', MessageSchema)

exports.newMessage = (username, message, number) => {

    var message = new Message({
        username: username,
        message: message,
        stars:number
    })
    return message;
}

exports.getAllMessages = async () => {
    let allMessages = await Message.find({}).sort({date: -1}).limit(6);
    return allMessages;
}

exports.getOneMessage = async (message) => {
    let messages = await Message.findOne({message: message});
    return messages;
}