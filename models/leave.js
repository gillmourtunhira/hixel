const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let leaveSchema = new Schema({
    employeeId: Number,
    residingAddress: String,
    leave: {
        leaveStart: Date,
        leaveEnd: Date,
        leaveType: String
    },
    dateApplied: Date,
    hod: String,
    leaveStatus: {
        pending: Boolean,
        approved: Boolean,
        rejected: Boolean
    }
}, {
    timestamps: true
});

// Define Mongoose Model
const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;