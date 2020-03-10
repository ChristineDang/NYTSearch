var api_key = "ciyO7EAKGNfSD3iDsnjOufrSOYZAG9ZC";

function display_articles(response) {
	$("#searchResults").empty();
	for(var i = 0; i < $("#Records").val(); i++) {
		console.log("here");
		var article = response.response.docs[i];
		var article_div = $("<div>");
		article_div.append($("<p>").text(article.headline.main));
		article_div.append($("<p>").text(article.byline.original));
		article_div.append($("<p>").text(article.web_url));
		$("#searchResults").append(article_div);
	}
}

function get_articles() {
	event.preventDefault();

	var begin_year = $("#startYear").val();
	//var begin_year = "2010";
	var begin_date = begin_year + "0101";
	var end_year = $("#endYear").val();
	//var end_year = "2012";
	var end_date = end_year + "1231";
	var search = $("#Search").val();
	var query_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=pub_year&facet=true&begin_date=" + begin_date + "&end_date=" + end_date + "&q=" + search + "&api-key=" + api_key;
		console.log(query_url);

	$.ajax({
		url: query_url,
		method: "GET"
	}).then(display_articles);
}

function clear_articles() {
	event.preventDefault();
	$("#searchResults").empty();
}

$("#searchButton").click(get_articles);
$("#clearButton").click(clear_articles);
