const app = require('./app');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();



app.listen(3000, () => console.log('Server running......'));

