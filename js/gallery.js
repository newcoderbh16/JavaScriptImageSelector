//Variables for the small images 
var smallImg1 = document.getElementById("smallImg1");
var smallImg2 = document.getElementById("smallImg2");
var smallImg3 = document.getElementById("smallImg3");
var smallImg4 = document.getElementById("smallImg4");
var smallImg5 = document.getElementById("smallImg5");


//Function with event listener for image selected
//Function also contains parameters to change H1 colour, Figcaption, Figcaption colour, background colour
function imageSelected(smallImage, image, figCaptionChange, figCaptionColour, colour, h1Colour){
	
	smallImage.addEventListener("click",function(){

		var figCaption = document.getElementById("figCaption");
		var h1 = document.getElementById("h1");
		var smallImg1Src = document.getElementById(image).src;
		var smallImg1Replace = smallImg1Src.replace("small", "large");
	
		document.getElementById("mainImg").src = smallImg1Replace;
		figCaption.innerHTML = `${figCaptionChange}`;
		figCaption.style.color =`${figCaptionColour}`;
		document.body.style.backgroundColor = `${colour}`;
		h1.style.color = `${h1Colour}`;	

	});
}

//Functions are in use for each small image selected with appropriate arguments  
imageSelected(smallImg1, "smallImg1","Pleasantly Pink Flowers","black", "#FF69B4", "black");
imageSelected(smallImg2, "smallImg2", "Popping Purple Flowers", "White", "purple", "White");
imageSelected(smallImg3, "smallImg3", "Ripe Red Flowers", "White", "red", "White");
imageSelected(smallImg4, "smallImg4", "Whimsical White Flowers", "black", "grey", "black");
imageSelected(smallImg5, "smallImg5", "Sun-Shine Yellow Flowers", "black", "yellow", "black");

