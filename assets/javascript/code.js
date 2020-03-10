var APIKey = "ciyO7EAKGNfSD3iDsnjOufrSOYZAG9ZC";
var Search = "Brother";
var beginYear = "2010";
var bY = beginYear + "0101";
var endYear = "2015";
var eY = endYear + "1231";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=pub_year&facet=true&begin_date="+bY+"&end_date="+eY+"&q="+Search+"&api-key="+APIKey;

$.ajax({
  url:queryURL,
  method: "GET"
})

  .then(function(response){
    console.log(response);
    for(var i = 0; i < 5; i++){
      console.log(response.response.docs[i].headline.main);
      console.log(response.response.docs[i].web_url);
      console.log(response.response.docs[i].byline.original);
    }
  });