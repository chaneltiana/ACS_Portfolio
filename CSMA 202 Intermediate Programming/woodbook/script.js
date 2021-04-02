$('.modal-new').hide();

$('.add-button').click(function(){
  $('.modal-new').show();
  $('.navigation').hide();
  $('.add-button').hide();
  $('.container').hide();
});

$('.exit-button').click(function(){
  $('.modal-new').hide();
  $('.navigation').show();
  $('.add-button').show();
  $('.container').show();
});


//QUERY ALL BOARDS
$.ajax({
'method': 'GET',
'url': 'https://api.woodbook.site/v0/topics',
'dataType': 'json'
}).done(function(data) {                                      // when the request is done this callback function is called:
for (var i=0; i < data.length; i++) {
  if (data[i].topic.startsWith('chanel-')) {

    var topic = data[i].topic.substring(7);
    var cap_topic = topic.charAt(0).toUpperCase() + topic.substring(1);
    var elem = $('<li class="board-' + topic + '"> <div> <a href="boards.html?topic=' + topic + '"> ' + cap_topic + ' </a> </div> </li>');

    $('.container > ul').append(elem);
    //<li> <div class = "title2"> <a href="boards.html?topic=quotes"> Quotes </a> </div> </li>

    console.log('yay', data[i].topic);
  }    
}
});




//TRY MAKING NEW BOARD


$("#create-button").click(function(){

  var topic = $('#board-name').val().toLowerCase();

  if ($('.board-' + topic).length) {

    alert('board already exists');

  } else if ($('#board-name').val().length != 0){

      var params = {
        topic: 'chanel-' + topic                                    // and we're filtering by topic to ensure it will come with an image
      };
  
    $.ajax({                                            
      'method': 'GET',                                 
      'url': 'https://api.woodbook.site/v0/messages', 
      'dataType': 'json',
      'data': params   
    });

      
      var topic = $('#board-name').val().toLowerCase();
      var topic_with_prefix = 'chanel-' + topic;
      var cap_topic = topic.charAt(0).toUpperCase() + topic.substring(1);

      console.log('topic for creating the channel is ', topic_with_prefix);
      console.log('topic for the URl is ', topic);
      console.log('topic for the HTML (cap.) is ', cap_topic);

      var elem = $('<li class="board-' + topic + '"> <div> <a href="boards.html?topic=' + topic + '"> ' + cap_topic + ' </a> </div> </li>');

      //create new topic with chanel-

      $('.container > ul').append(elem);

      $('#board-name').val(''); 
      $('#board-name').focus();
  }


});

