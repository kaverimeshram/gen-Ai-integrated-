const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String ,
        required: ["true", "token is required to be added in blacklist"]
    }
},{
   timestamps: true
})

const tokenblacklistModel = mongoose.model("tokenblacklist", blacklistTokenSchema);

module.exports = tokenblacklistModel;

/**
 * @Route GET/api/auth/logout
 * @description clear the token form user cookie and add the token in blacklist collection in database
 * @access Private
 */

