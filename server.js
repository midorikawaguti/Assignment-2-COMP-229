const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app =  require('./app');

dotenv.config({path:'./config.env'});

const DB =  process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser : true,
    useUnifiedTopology: true

})
.then(con => {
    // console.log(con.connections);
    console.log('DB connection successful!');
});




// simple route

app.get("/", (req, res) => {

    res.json({ message: "Welcome to DresstStore application." });
  
  });



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});