$(document).ready(function(){

$('.dot:first-child').addClass('activedot');

	$('.nextD div').click(function(){
		var btnz = $(this).index();
		var topp = 1+$('.wrapper_0').scrollTop()+$('.blockk').eq(btnz).offset().top; 
		$('.wrapper_0').animate({scrollTop:topp},'slow');
	console.log(topp);
});
$('input[name="go_btn"]').click(function(){
	var gogo = $('.wrapper_0').scrollTop()+$('.register').offset().top;
	$('.wrapper_0').animate({scrollTop:gogo},'slow');
});
$('.Country').on("click",function(event){
	event.stopPropagation();
	console.log('lal');
	$('.choose').toggleClass('otk');
	$('input[name="enter2"]').toggleClass('zak');
	$(document).on("click", function(){
			$('.choose').removeClass('otk');
			$('input[name="enter2"]').toggleClass('zak');
			$(document).off("click");
		});
});
$('.Country2').on("click",function(){
	var tmp = $(this).text();  //ITALY USA...
	console.log (tmp);
	var current = $('.Country').children().filter('p'); // COUNTRY
	console.log (current);
	current.text(tmp);	
});
//slider
var lasPosLeft = 0;
$('.arrowright').click(function(e){
		$('.arrowright').addClass('hidden');
		var sliderz = $('.slider').outerWidth();
		var pos = $('.blockklarge').offset();
		var elem_left = pos.left;
		var Xinner = (sliderz - elem_left);
		var dlinna = $('.blockklarge').outerWidth();	
		var percentDlinna = (sliderz/dlinna)*100;
		var percentt = (Xinner/dlinna)*100;
		var percent = Math.round(percentt);
	if (percent <=80) {

		$('.blockklarge').css({
		"transform":"translate3d("+(-percent)+"%,0,0)",
		'transition-duration':'0.2s',
	});
	}; //if
	if (percent >80) {
		$('.blockklarge').css({
		"transform":"translate3d(0%,0,0)",
		'transition-duration':'0.1s',
	     '-webkit-transition-delay': '0.15s',
	     '-o-transition-delay': '0.15s',
	     '-moz-transition-delay':' 0.15s',
	     'transition-delay': '0.15s'
	});
	};
function swapDot(childd,perc){
	if (percent == perc ) {
		$('.dot').removeClass('activedot');
		$('.dot:nth-child('+childd+')').addClass('activedot');
		setTimeout(function(){
		$('.arrowright').removeClass('hidden');
	},250);
	};
	
}
swapDot(1,0);
swapDot(2,20);
swapDot(3,40);
swapDot(4,60);
swapDot(5,80);
swapDot(1,100);
console.log(percent)
// dots slider 
lasPosLeft = Xinner;
}); // (E)
 function actDot(dotNubmer,translate){
 	$('.dot:nth-child('+dotNubmer+')').click(function(){
 		$('.blockklarge').css({
	"transform":"translate3d("+translate+"%,0,0)",
	'transition-duration':'0.25s',
								});
	$('.dot').removeClass('activedot');
	$(this).addClass('activedot');
	});
	
 	}
actDot(1,0);
actDot(2,-20);
actDot(3,-40);
actDot(4,-60);
actDot(5,-80);



}); //реди

