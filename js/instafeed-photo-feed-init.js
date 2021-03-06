// Load more button
var loadButton = document.getElementById("js-load-more");
var feed = new Instafeed({
  get: "user",
  userId: "xxxxxxxxxxx",
  accessToken: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  template:
    '<div class="main-container-instafeed-photo-outer"><div class="main-container-instafeed-photo-inner"><a href="{{link}}"><div class="main-instafeed-photo" style="background-image: url(\'{{image}}\');"></div></a><p>{{caption}}</p></div></div>',
  limit: 4,
  resolution: "standard_resolution",
  sortBy: "most-recent",
  // every time we load more, run this function
  after: function () {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute("disabled", "disabled");
    }
  },
});

// bind the load more button
loadButton.addEventListener("click", function () {
  feed.next();
});

// run our feed!
feed.run();
