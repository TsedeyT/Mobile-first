// window.onload = function(){
//     document.body.innerHTML = document.body.innerHTML + "<div> RABBIT </div>";
// };


$(document).ready(function(){

  $('.mobile-menu__wrapper').click(function(){
    $('.menu').toggleClass('show-menu');
    $('.mobile-menu__wrapper').toggleClass('open');

  });



$(".blog-btn").click(function(){
       $(this).parent().find('.blog-excerpt').toggleClass('show-Content');
	});
})

$(function() {
    var images = [ 'Slider.png','Slider2.jpg','Slider3.jpg','Slider4.jpg'];
    $('.hero-slider').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
   });

 /**************************/

 /*$(document).ready(function(){
	$('#search').keyup( function (){
		searchHighlight($(this).val());
	});

  });

function searchHighlight(searchText){
	if(searchText){
		var content = $('body').text();
		var searchExp = new RegExp(searchText, "ig");
		var matches = content.match(searchExp);
		if(matches){
			$('body').html(content.replace(searchExp,function(match)
			{
				//return "<span class='highlight'>" + match + "</span>";
			
			}));
		}
	}
}
*/

$(function() {
    $('#search').bind('keyup change', function(ev) {
        var searchTerm = $(this).val();

        $('body').removeHighlight();

        if ( searchTerm ) {
            $('body').highlight( searchTerm );
        }
    });
});
