const { app } = require('./app');
const { db } = require('./utils/database.util');
const startServer = async () => {
    db.authenticate()
        .then(() => {
            console.log('database authenticate');
        })
        .catch((err) => console.log('error'));

    db.sync()
        .then(() => {
            console.log('database sync');
        })
        .catch((err) => console.log('error'));

    app.listen(2000, () => {
        console.log('Express app running!');
    });
};

startServer();
