$('#movie-search-form').keyup(function(e) {
  e.preventDefault();
  $('.result').hide();
  var userSearchQuery = this.query.value;
  if (userSearchQuery.length > 2){
    searchOMDB(userSearchQuery);
  }
});

function searchOMDB(query) {
  $.getJSON('https://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    if (omdbData.Response === "True"){
      renderMovie(omdbData)
      console.log(omdbData);
    } else {
      renderError();
      console.log(omdbData);
    }
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#title').html(data.Title);
  $('#year').html(data.Year);
  $('#actors').html(data.Actors);
  $('#poster').attr("src", data.Poster);
  $('.error').hide();


}

function renderError() {
  $('.error').show();
}
