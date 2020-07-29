const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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
    payroll: {
        type: Schema.Types.ObjectId,
        ref: 'Payroll'
    },
    accountCreated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

//hashing a password before saving it to the database
employeeSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

// Define Mongoose Model
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;