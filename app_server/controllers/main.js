/**
 * Created by josephcunningham on 2/7/17.
 */
const csv = require('csvtojson')

/* GET home page */
module.exports.index = function(req, res){

    csv()
        .fromFile('data/result.csv')
        .on('end_parsed',function(jsonArray){
            res.render('index', {title: 'Express', data: jsonArray});
        });

};
