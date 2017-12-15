$(document).ready(function(){
	var sliderImages = ["slider-one.png", "slider-two.jpg", "slider-three.jpg", "slider-four.jpg"];
	var sliderIdx = 0;
	var slider = $('#slider');
	var CHANGE_IMAGE_INTERVAL = 7500;
	
	nextImage(sliderIdx);

	setInterval(function(){
		sliderIdx = (sliderIdx + 1) % sliderImages.length;
		nextImage(sliderIdx)
	}, CHANGE_IMAGE_INTERVAL);

	function nextImage(idx){
		var imgUrl = '../img/' + sliderImages[idx];
		slider.css("background-image", "url(" + imgUrl + ")"); 
	}

	// google map
	var map;
	function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}
});




