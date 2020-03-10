var APIKey = "ciyO7EAKGNfSD3iDsnjOufrSOYZAG9ZC";

var queryURL = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key="+ APIKey;

$.ajax({
  url:queryURL,
  method: "GET"
})

  .then(function(response){
    console.log(response);
  });