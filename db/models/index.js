const mysql = require("mysql");


const db = mysql.createConnection({
    host: "localhost",
    database: "apiProject",
    password: "password",
    user: "root"
})

const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        try {
            db.query(query, values, (err, result) => {
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = Query;