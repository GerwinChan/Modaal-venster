var hotelVenObj = (function () {
    
    var $window = $(window);
    var $hotelVenster = $('<div class="hotel-venster"/>');
    var $hotelInhoud = $('<div class="hotel-inhoud"/>');
    var $hotelSluit = $('<span class="hotel-knop">&#10005;</span>');
    
    $hotelVenster.append($hotelInhoud);
    
    return {
    
    centreren: function() {
        
        var links = Math.max($window.width()-$hotelInhoud.outerWidth(),0)/10;
        var boven = Math.max($window.height()-$hotelInhoud.outerHeight(),0)/10;
        $hotelInhoud.css({left: links, top: boven});
    },
        openen: function(instellingen) {
       $hotelInhoud.append(instellingen.inhoud, $hotelSluit);
        $hotelInhoud.css({width: instellingen.breedte+'px' || 'auto',
                          height: instellingen.hoogte+'px' || 'auto'}).on('click', function(e){
            e.stopPropagation();
            
        });
        $hotelVenster.appendTo('body')
                                .on('click',hotelVenObj.sluiten);
            hotelVenObj.centreren();
        $hotelSluit.on('click', hotelVenObj.sluiten);
            $window.on('resize',hotelVenObj.centreren);
        },
        
        sluiten: function()  {
        
       $hotelInhoud.empty()
        .off('click',hotelVenObj.sluiten);
         $hotelVenster.detach();
        $window.off('resize',hotelVenObj.centreren);
        }
    
    }
}());