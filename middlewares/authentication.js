const { readToken } = require("../helpers/jwt")
const {User} = require('../models/index');

const authentication = async (req, res, next) => {
    console.log('masukAuth');
    try {
        const {access_token} = req.headers
        const payload = readToken(access_token)
        const currentUser = await User.findByPk(payload.id)
        
        if (!currentUser) {
            throw {
                code: 401,
                name: 'User not found or Password not matched',
                message: 'User not found or Password not matched'
            }
        } else {
            req.currentUser = {
                id: currentUser.id,
                role: currentUser.role,
                email: currentUser.email
            }
            next()
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {authentication}