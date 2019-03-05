var express = require('express');
var app = express();


app.get('/', function (req, res) {
    
    const sql = require('mssql/msnodesqlv8')
    var config = {
        database: 'eHR_Warehouse_v2',
        server: 'qc',
        driver: 'msnodesqlv8',
        options: {
            trustedConnection: true
        }
    };

    sql.connect(config, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from district_ref', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
    // const pool = new sql.ConnectionPool({
    //     database: 'eHR_Warehouse_v2',
    //     server: 'qc',
    //     driver: 'msnodesqlv8',
    //     options: {
    //       trustedConnection: true
    //     }
    //   });
      
    //   pool.connect().then(() => {
    //     //simple query
    //     pool.request().query('select * from district_ref', (err, result) => {
    //           console.dir(result)
              
    //       });
    //   });
});

var server = app.listen(5000, function() {
    console.log('Server is running...');
});