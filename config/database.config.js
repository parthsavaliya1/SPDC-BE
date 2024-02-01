const mongoose = require('mongoose')

const DB_URI = process.env.DATABASE_URI;

console.log(DB_URI)

mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected')).catch((error) => console.log('Error connecting databse',error))