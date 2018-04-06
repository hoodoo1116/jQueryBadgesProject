$(function() {

  // your code will go here
  // https://www.codeschool.com/users/3553694.json
  $.ajax({
    url: 'https://www.codeschool.com/users/3553694.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
      // handle response
      var listItems = $.map(response.courses.completed, function(item, index) {
        var content = $('<div></div>');
        content.addClass('course');
        $('<h3>' + item.title + '</h3>').appendTo(content);
        $('<img src="'+ item.badge + '" />').appendTo(content);
        $('<a class="btn btn-primary" target="_blank" href="' + item.url + '">See Course</a>').appendTo(content);
        return content;
      });
      $('#badges').html(listItems);
    }
  });
});
