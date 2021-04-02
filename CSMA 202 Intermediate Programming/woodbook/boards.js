  var urlParams = (new URL(window.location)).searchParams;
  var topic = urlParams.get('topic');

  $('.exit-image').hide();

$('.close-button').click(function(){
    window.history.back();
});


 

  // GETTING IMAGE
  $('#new-message-image').on('change', function() {
  if (!this.files[0]) {
    return;
  }
  var reader = new FileReader();
  
  reader.addEventListener('load', function() {
    $('#new-message-image-preview').show();
    $('.exit-image').show();
    $('#new-message-image-preview').attr('src', reader.result);
  }, false);
  
  reader.readAsDataURL(this.files[0]);
  });
  

  
  $('#new-message-submit').click(function() {
    var data = {                              
      topic: 'chanel-' + topic
    };

    var msg = $('#new-message-msg').val();
    var image = $('#new-message-image-preview').attr('src');

    if (msg) {
      data.msg = msg;
    }
    if (image) {
      data.image = image;
    }

    console.log('sending', data);
  
    $.ajax({                                                      //this will currently fail when uploading files > 3 MB
      'method': 'POST',
      'url': 'https://api.woodbook.site/v0/messages',
      'contentType': 'application/json',
      'data': JSON.stringify(data),
    });

    $('#new-message-msg').val('');                     
    $('#new-message-msg').focus(); 

    $('#new-message-image-preview').hide();
    $('#new-message-image-preview').attr('src', null);

  });

  $('.exit-image').click(function(e) {
    $('.exit-image').hide();
    $('#new-message-image-preview').hide();
    $('#new-message-image-preview').attr('src', null);
  });

 

  setInterval(function() {   
    var params = {
      topic: 'chanel-' + topic                                    // and we're filtering by topic
    };

  $.ajax({                                            
    'method': 'GET',                                 
    'url': 'https://api.woodbook.site/v0/messages', 
    'dataType': 'json',
    'data': params                               
  }).done(function(data) {  
    $('#messages').empty();
    for (var i=0; i < data.length; i=i+1) {
      if(data[i].msg){
        $('#messages').append('<p class="message"><span="message-msg">' + data[i].msg + '</span></p>');
      }
      else if (data[i].image){
        $('#messages').append('<img src="' + data[i].image + '">');
      }
     }
  });
}, 1000);