

$(document).ready(function(){

  $.ajax({
    dataType: 'json',
    url: 'http://localhost:3000/concerts.json',
    method: 'GET',
    success: function(dataFromServer) {
      dataFromServer.forEach(function(concert){
        $("#concert_list").append('<li><a href="/concerts/' + concert.id + '">' + concert.band + ' ' + concert.location + ' ' + concert.ticket_price + '</a></li>');
      });
    },
    // call this function if call to server was not successful
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Failed: " + errorThrown);
    }
  });// end ajax

  $("#add_concert").on("click", function() {
    var inputBand = $("#band_name").val();
    var inputLocation = $("#location_name").val();
    var inputTick = parseInt($("#ticket_price").val());

    var concertObject = {
      concert: {
        band: inputBand,
        location: inputLocation,
        ticket_price: inputTick
      }
    };

    $.ajax({
      dataType: 'json',
      url: '/concerts',
      method: 'POST',
      data: concertObject,
      success: function(dataFromServer) {
        alert("Received message: " + JSON.stringify(dataFromServer));
        $("#concert_list").append('<li>' + '<a href="/concerts/' + dataFromServer.id + '">' + dataFromServer.band + ' ' + dataFromServer.location + ' ' +  dataFromServer.ticket_price + '</a>' + '</li>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Failed: " + errorThrown);
        }
      });// end ajax
  }); //end of add concert button

}); //end of document ready
