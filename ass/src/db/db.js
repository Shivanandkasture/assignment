const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     :  3306,
    user     : 'root',
  password : 'Shiva@1415',
     database: 'user'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });




const sql= function  (sqlQuery, params) {
    return new Promise((resolve, reject) => {
      connection.query(sqlQuery,params, (err, result) => {
          if(err){reject(new Error());}
             else{resolve(result);}
          });
       });
};
   

module.exports= sql