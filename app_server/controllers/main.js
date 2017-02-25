/**
 * Created by josephcunningham on 2/7/17.
 */
/* GET home page */

const csv = require('csvtojson');

module.exports.index = function(req, res){
    csv()
        .fromFile('data/results.csv')
        .on('end_parsed',function(jsonArray){
            res.render('index', {title: 'Express', data: jsonArray});
        });
};

