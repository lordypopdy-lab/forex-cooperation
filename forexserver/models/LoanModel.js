const mongoose = require("mongoose");
const { Schema } = mongoose;


const loanSchema = new Schema({
    email: {
        type: String,
        require: true
    }, 
    bankName: {
        type: String,
        require: true
    }, 
    accountNumber: {
        type: String,
        require: true
    }, 
    amount: {
        type: String,
        require: true
    }, 
    firstName: {
        type: String,
        require: true
    }, 
    lastName: {
        type: String,
        require: true
    }, 
    ID: {
        type: String,
        require: true
    }
})

const loanModel = mongoose.model("loan", loanSchema);

module.exports = loanModel;