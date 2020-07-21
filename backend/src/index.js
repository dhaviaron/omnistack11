let express = require('express');
let routes = require('./routes')
let app = express();
let cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)
 

app.listen(3333)