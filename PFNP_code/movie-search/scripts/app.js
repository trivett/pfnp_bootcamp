
function searchIMDB(query) {
  // http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json
  $.getJSON('http://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    let results = omdbData;
    if (omdbData.Response == "True"){
      renderMovie(omdbData);
    } else {
      renderError();
    }
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#poster').attr("src", data.Poster);
  $('#title').html(data.Title);
}

function renderError() {
  $('.error').show();
}


$('#movie-search-form').on('submit', function(event) {
  event.preventDefault(); // this prevents the page from reloading again -- this is one way that JavaScript lets you perform actions asynchronously
  $('.result').hide();
  searchIMDB(this.query.value);
  this.query.value = '';
});
