const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: { type: String, unqiue: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "Role"}],
    activationLink: { type: String },
    isActivated: { type: Boolean, default: false },

})

module.exports = model("user", UserSchema)