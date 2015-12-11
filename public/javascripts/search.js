$(function () {
  var foodList       = $("#food-list"),
      searchField    = $("#search-box"),
      options        = foodList.find("li.food-list-li").clone(); // clone into memory

  // generic function to clean text
  function sanitize(string) {
    return $.trim(string).replace(/\s+/g, ' ').toLowerCase();
  }

  // prepare the options by storing the
  // "searchable" name as data on the element
  options.each(function () {
    var option = $(this);
    option.data( "sanitized", sanitize(option.text()) );
  });

  // handle keyup
  searchField.on("keyup", function (event) {
    var term = sanitize( $(this).val() ),
        matches;

    // just show all options, if there's no search term
    if( !term ) {
      foodList.empty().append(options.clone());
      return;
    }

    // otherwise, show the options that match
    matches = options.filter(function () {
      return $(this).data("sanitized").indexOf(term) != -1;
    }).clone();
    foodList.empty().append(matches);
  });
});
