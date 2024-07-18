const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        console.log('db', uri);
        mongoose.set('strictQuery', false)
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB