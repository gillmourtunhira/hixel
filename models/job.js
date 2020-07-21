const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jobSchema = new Schema({
    job: {
        title: String,
        reference: Number,
        status: {
            fullTime: Boolean,
            partTime: Boolean,
            contract: Boolean
        }
    },
    education: {
        level: String,
        major: String
    },
    name: {
        firstName: String,
        lastName: String
    },
    email: String,
    mobile: Number,
    salaryRange: Number,
    avatar: Buffer,
    cv: Buffer
}, {
    timestamps: true
});

// Define Mongoose Model
const Job = mongoose.model('Job', jobSchema);
module.exports = Job;