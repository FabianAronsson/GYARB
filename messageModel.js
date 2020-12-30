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
        stars: number
    })
    return message;
}

exports.getAllMessages = async () => {
    let allMessages = await Message.find({}).sort({
        _id: -1
    }); //there was a .limit(), but it proved useless for later. There is no point in limiting the amount of messages, when you can handle that when you are actually using them. It is better practice to have as little code as possible in each method, and rather split it up into smaller ones instead. The limiting logic is now handled directly in the ejs in order to be able to use this method for other purposes. Of course there is the .sort() method, but in this case it was neccessary to get the messages in the right order, aka in a date bases fashion.
    return allMessages;
}

exports.getOneMessage = async (message) => {
    let messages = await Message.findOne({
        message: message
    });
    return messages;
}