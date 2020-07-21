const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let payrollSchema = new Schema({
    employeeId: {
        type: Number,
        required: true
    },
    payment: {
        paymentDate: Date,
        paymentMode: String
    },
    basicPay: Number,
    total: {
        totalAllowances: Number,
        totalDeductions: Number,
        totalOvertimePay: Number
    },
    overtimeHours: Number,
    netPay: Number
}, {
    timestamps: true
});

// Define Mongoose Model
const Payroll = mongoose.model('Payroll', payrollSchema);
module.exports = Payroll;