module.exports = function () {

    let mysql = require('mysql2')

    //Establish Connection to the DB
    let connection = mysql.createConnection({
        host: 'us-cdbr-east-06.cleardb.net',
        user: 'username',
        password: 'password',
        database: 'db_name'
    });

    connection.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Database connection established")
        }
    });

    //return connection object
    return connection
}