function replaceName () {
	var myNewName = window.prompt('Pick a new name!');
	document.getElementById('user-name').innerHTML = myNewName;
}

function changeImage () {
	var img = document.getElementById("main-image");
	if (img.src.match("image1")) {
		img.src = "image.jpg";
	}
	else {
		img.src = "image1.jpg";
	}	
}

// $(document).ready(function() {
//   $("p").click(function(){ 
//   	// $(this).hide(); 
//    	$(this).css('color','purple'); 
// })
// });


// document.onclick = replaceName;

