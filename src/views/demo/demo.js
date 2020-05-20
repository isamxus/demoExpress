import Action from './urls';
import SQL from '../../../db/SQL.js';
import query from '../../../db/dbconfig.js';

let express = require('express');
let router = express.Router();

/*const responseHandler = (err, rows, fields) => {
	if (err) throw err; 
}*/

//const requestHandler = (req, res, next, sql) => query(sql, responseHandler(err, rows, fields))




//获取用户列表
//router.get(Action.getUser, requestHandler(req, res, next, SQL.insertHandler));

/*router.get(Action.addUser, function(req, res, next) {
  	query(SQL.insertHandler, function (err, rows, fields) {
        if (err) {
            throw err;
        }else{
        	console.log(rows)
        }
    });
});*/

router.get('/', function(req, res, next) {
    res.send('Express');
});

module.exports = router;