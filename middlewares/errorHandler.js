const errorHandler = (error, req, res, next) => {
  console.log(error)
  let errorMessages
  switch (error.name) {
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({
        message: error.message,
      })
    case 'SequelizeValidationError':
      res.status(400).json({
        message: 'Please check your request',
      })
    case 'Email has been registered':
      res.status(400).json({
        message: 'Email has been registered',
      })
    case 'User not found or Password not matched':
      res.status(401).json({
        message: error.message,
      })
    case 'JsonWebTokenError':
      res.status(401).json({
        message: 'Invalid token, please log in again',
      })
    case 'Not authorized to update status':
      res.status(403).json({
        message: error.message,
      })
    case 'Not authorized to update or delete':
      res.status(403).json({
        message: error.message,
      })
    case 'Job post not found':
      res.status(404).json({
        message: error.message,
      })
    default:
      res.status(500).json({
        message: 'Internal server error',
      })
  }
}

module.exports = errorHandler
