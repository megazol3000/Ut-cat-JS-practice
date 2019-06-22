var catButton = document.querySelector('#ut');
var leftHand = document.querySelector('.cat-left-hand');
var rightHand = document.querySelector('.cat-right-hand');
var says = document.querySelectorAll('.say p');
var buttonUt = document.querySelector('.main-section');
var i = 0;
catButton.onclick = function animateUt(){
	says[i].classList.add('say--ut');
	says[i].classList.remove('say--none');
	
	setTimeout(function(){
	says[i].classList.add('say--none');
	says[i].classList.remove('say--ut');
	
	i++;
		if (i >= says.length) {
			i=0;
		}
	}, 500); 
	
}

buttonUt.onclick = function animateCat() {
	leftHand.classList.add('leftHand_anim');
	rightHand.classList.add('rightHand_anim');
	setTimeout(function(){
	leftHand.classList.remove('leftHand_anim');
	rightHand.classList.remove('rightHand_anim');
	
	}, 1200);
}
