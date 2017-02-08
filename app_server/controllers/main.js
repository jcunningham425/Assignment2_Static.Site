/**
 * Created by josephcunningham on 2/7/17.
 */
/* GET home page */
module.exports.index = function(req, res){
    res.render('index', {title: 'Express'});
};