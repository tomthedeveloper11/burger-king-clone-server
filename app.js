if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const index = require('./routers/index')
const items = require('./routers/items')
const categories = require('./routers/categories')
const customers = require('./routers/customers')

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', index)
app.use('/items', items)
app.use('/categories', categories)
app.use('/customers', customers)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
