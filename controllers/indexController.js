const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class IndexController {
  static redirect(req, res) {
    res.redirect('/login')
  }

  static async register(req, res, next) {
    try {
      let { email, password, role, phoneNumber, address } = req.body

      const userExist = await User.findOne({
        where: {
          email,
        },
      })

      if (userExist) {
        throw {
          name: 'Email has been registered',
          message: 'Email has been registered',
        }
      } else {
        let createdUser = await User.create({
          email,
          password,
          role,
          phoneNumber,
          address,
        })

        res.status(201).json({
          id: createdUser.id,
          email: createdUser.email,
        })
      }
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body

      const foundUser = await User.findOne({
        where: {
          email,
        },
      })
      //If user exist
      if (foundUser) {
        //Then compare password
        const correctPassword = comparePassword(password, foundUser.password)

        //If user password is correct
        if (correctPassword) {
          const payload = {
            id: foundUser.id,
            email: foundUser.email,
          }

          const access_token = createToken(payload)
          req.headers.access_token = access_token
          //Return access token
          res.status(200).json({
            access_token,
            user: {
              id: foundUser.id,
              email: foundUser.email,
              role: foundUser.role,
            },
          })
        } else {
          //If user password is NOT correct
          throw {
            name: 'User not found or Password not matched',
            message: 'User not found or Password not matched',
          }
        }
      } else {
        //If user does NOT exist
        throw {
          name: 'User not found or Password not matched',
          message: 'User not found or Password not matched',
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = IndexController
