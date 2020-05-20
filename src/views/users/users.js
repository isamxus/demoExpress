import Action from './urls';
import SQL from '../../../db/SQL.js';
import query from '../../../db/dbconfig.js';

let express = require('express');
let router = express.Router();



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
    res.send('Hello');
});

module.exports = router;