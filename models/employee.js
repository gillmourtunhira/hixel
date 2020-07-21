const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    employeeId: {
        type: Number,
        required: true
    },
    name: {
        firstName: String,
        lastName: String,
    },
    department: {
        type: String
    },
    role: {
        type: String
    },
    email: {
        type: String
    },
    joinedDate: {
        type: Date
    },
    employmentStatus: {
        fullTime: Boolean
    },
    mobile: {
        type: Number
    },
    accountCreated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});


// Define Mongoose Model
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;