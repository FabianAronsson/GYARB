const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    username: String,
    reviewEmail: String,
    message: String,
    stars: Number,
})

const Message = mongoose.model('Message', MessageSchema)

exports.newMessage = (username, message, number, email) => {

    var message = new Message({
        username: username,
        reviewEmail: email,
        message: message,
        stars: number
    })
    return message;
}
/**there was a .limit(), but it proved useless later on. There is no point in limiting the amount of messages, when you can handle that
 *  when you are actually using them. It is better practice to have as little code as possible in each method, and rather split it up 
 * into smaller ones instead. The limiting logic is now handled directly in the ejs logic in order to be able to use this method for 
 * other purposes. Of course there is the .sort() method, but in this case it was neccessary to get the messages in the right order, 
 * aka in a date based fashion. There is no simple way to sort the messages inside the ejs logic and the mongoose variant 
 * is simply more effective. */
exports.getAllMessages = async () => {
    let allMessages = await Message.find({}).sort({
        _id: -1
    }); 
    return allMessages;
}

exports.getOneMessage = async (message) => {
    let messages = await Message.findOne({
        message: message
    });
    return messages;
}

/**The method counts the amount of documents that contain the a specific email. If the email exist, it returns false, as it is not unique. 
 * Because of the nature of countDocuments(), it only look at the "email" part and ignores whether a new message has been posted from the 
 * same email. However, in order to reduce spam and duplicate messages in both the database and on the website, a unique email has to be 
 * provided. Should however someone want to flood the review section, that is still entirely possible, but now normal users will not 
 * accidentally post a duplicate review. */
 
exports.doesReviewExist = async (email) => {
    let isUnique = false;
    await Message.countDocuments({
        reviewEmail: email
    }, function (err, count) {
        if (count == 0) {
            isUnique = true;
        }
    });
    return isUnique;
}