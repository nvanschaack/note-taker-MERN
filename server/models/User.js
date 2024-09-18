//schema is blueprint, model is for actually creating the table
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//Schema for user
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        // this will need to be an array of the ID values that reference the Note Model
        notes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Note'
            }
        ]
    }
)

userSchema.pre('save', async function (next) {
    //isNew is a predefined property of the class Schema, it checks if the document is newly created (is it a new user?)=> it returns a boolean
    //isModified is checking if the data already exists, if so, is the user modifying or changing it (this wold mean the user wants to change their password)
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

//compare fxn returns a boolean
userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;
