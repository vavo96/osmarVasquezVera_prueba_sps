const mongoose = require('mongoose');

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

    } catch (error) {
        console.log('------------------------------------', error);
        throw new Error('Error al momento de inicializar la BD');
    }
}

module.exports = {
    dbConnection
};