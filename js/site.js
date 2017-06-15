console.log("hi");

$(".js-hamburger").on("click", function(event){
	event.preventDefault();
	$("nav li").toggle();
});


var button = document.getElementById('linkedinButton')

	button.addEventListener('click', function(){
		window.open('https://www.linkedin.com/in/lindsey-gilmore-037b8031/')
}
