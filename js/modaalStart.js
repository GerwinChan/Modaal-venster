$(document).ready( function() {
    var Lobby = $('#ingang').detach();
    var Restaurant = $('#hal').detach();
    var Hotel = $('#patroon').detach();
    var Room = $('#roombig').detach();
    
    //events bij de thumbs
    
    $('#ingang1').on('click',function() {
        hotelVenObj.openen({inhoud: Lobby, breedte: 600});
        
    });
   
     $('#hal1').on('click',function() {
        hotelVenObj.openen({inhoud: Restaurant, breedte: 600});
        
    });
   
      $('#hotel').on('click',function() {
        hotelVenObj.openen({inhoud: Hotel, breedte: 600});
        
    });
    
     $('#room').on('click',function() {
        hotelVenObj.openen({inhoud: Room, breedte: 600});
        
    });
   
});  