const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required',
        trim: true
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: 'Mobile number is Required',
        trim: true,
        validator: function (mobile) {
            return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(mobile)
        }, message: 'Please fill a valid mobile number', isAsync: false
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'college',
        required: 'CollageId is Required'
    }
}, { timestamps: true })
module.exports = mongoose.model('intern', internSchema)