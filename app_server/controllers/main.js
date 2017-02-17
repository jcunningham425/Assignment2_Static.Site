/**
 * Created by josephcunningham on 2/7/17.
 */
/* GET home page */
module.exports.index = function(req, res){
    //var id = req.param('');
    //var fName = req.param('firstName');

    var data = getData();

    res.render('index', {title: 'Express', data: data});
};

function getData(){
    return [
        {
            "Ad group": "Surgeon",
            "Keyword": "beltway surgery center",
            "Status": "below first page bid (First page cpc : 6.71)",
            "Max. CPC": 4,
            "Impressions": 4878,
            "Avg. position": 1.1,
            "Clicks": 530,
            "CTR": "10.87%",
            "Avg. CPC": 0.53,
            "Match type": "Broad",
            "Cost": 279.01,
            "Conversions": "1,147.00",
            "Cost / conv.": 0.24,
            "Conv. rate": "216.42%",
            "Search Impr. share": "66.73%",
            "Search Lost IS (rank)": "31.83%",
            "Quality score": 7
        },
        {
            "Ad group": "Davinci Surgery",
            "Keyword": "+davinci +medical +robot",
            "Status": "eligible",
            "Max. CPC": 6,
            "Impressions": 0,
            "Avg. position": 0,
            "Clicks": 0,
            "CTR": "0.00%",
            "Avg. CPC": 0,
            "Match type": "Broad",
            "Cost": 0,
            "Conversions": 0,
            "Cost / conv.": 0,
            "Conv. rate": "0.00%",
            "Search Impr. share": "< 10%",
            "Search Lost IS (rank)": "0.00%",
            "Quality score": "--"
        },
        {
            "Ad group": "Surgeon",
            "Keyword": "+indianapolis +indiana +surgeons",
            "Status": "eligible",
            "Max. CPC": 4,
            "Impressions": 3,
            "Avg. position": 1.7,
            "Clicks": 1,
            "CTR": "33.33%",
            "Avg. CPC": 1.16,
            "Match type": "Broad",
            "Cost": 1.16,
            "Conversions": 1,
            "Cost / conv.": 1.16,
            "Conv. rate": "100.00%",
            "Search Impr. share": "100.00%",
            "Search Lost IS (rank)": "0.00%",
            "Quality score": "--"
        },
        {
            "Ad group": "Smoking",
            "Keyword": "+medical +programs +to +quit +smoking",
            "Status": "low search volume",
            "Max. CPC": 6,
            "Impressions": 0,
            "Avg. position": 0,
            "Clicks": 0,
            "CTR": "0.00%",
            "Avg. CPC": 0,
            "Match type": "Broad",
            "Cost": 0,
            "Conversions": 0,
            "Cost / conv.": 0,
            "Conv. rate": "0.00%",
            "Search Impr. share": "--",
            "Search Lost IS (rank)": "--",
            "Quality score": "--"
        },
        {
            "Ad group": "Pharmacy Clinics",
            "Keyword": "+pharmacy +clinic +near +me",
            "Status": "eligible",
            "Max. CPC": 6,
            "Impressions": 1,
            "Avg. position": 1,
            "Clicks": 0,
            "CTR": "0.00%",
            "Avg. CPC": 0,
            "Match type": "Broad",
            "Cost": 0,
            "Conversions": 0,
            "Cost / conv.": 0,
            "Conv. rate": "0.00%",
            "Search Impr. share": "50.00%",
            "Search Lost IS (rank)": "0.00%",
            "Quality score": 6
        },
        {
            "Ad group": "Hospital",
            "Keyword": "+university +hospital +indianapolis +in",
            "Status": "below first page bid (First page cpc : 6.77)",
            "Max. CPC": 6,
            "Impressions": 7,
            "Avg. position": 1,
            "Clicks": 0,
            "CTR": "0.00%",
            "Avg. CPC": 0,
            "Match type": "Broad",
            "Cost": 0,
            "Conversions": 0,
            "Cost / conv.": 0,
            "Conv. rate": "0.00%",
            "Search Impr. share": "77.78%",
            "Search Lost IS (rank)": "22.22%",
            "Quality score": 5
        },
        {
            "Ad group": "Hospital",
            "Keyword": "+hospital +indianapolis +indiana",
            "Status": "eligible",
            "Max. CPC": 6,
            "Impressions": 19,
            "Avg. position": 1.3,
            "Clicks": 2,
            "CTR": "10.53%",
            "Avg. CPC": 1.79,
            "Match type": "Broad",
            "Cost": 3.58,
            "Conversions": 2,
            "Cost / conv.": 1.79,
            "Conv. rate": "100.00%",
            "Search Impr. share": "24.36%",
            "Search Lost IS (rank)": "16.67%",
            "Quality score": 5
        }
    ];
}