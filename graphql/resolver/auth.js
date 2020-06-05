const User = require('../../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {getJWTKey} = require('../../helper/private');

module.exports = {
    login: async ({userName, password}) => {
        const user = await User.findOne({userName: userName});
        if(!user){
            throw new Error('User does not exist')
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual){
            throw new Error('Password is incorrect')
        }
        const token = jwt.sign({userName: user.userName, superRole: user.superRole,designation: user.designation,rolesAllowed :user.rolesAllowed},getJWTKey(),{
            expiresIn: '1h'
        });
        return { userName: user.userName,token: token, tokenExpiration: 1}

    }  
}