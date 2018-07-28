let chooseBtn   = document.getElementById('choose'),
     receive    = document.getElementById('receive'),
     heading    = document.getElementsByTagName('h2')[0],
     nameInput  = document.getElementsByClassName('contactform_name')[0],
     phoneInput = document.querySelector('.contactform_phone'),
     mailInput  = document.querySelectorAll('.contactform_phone')[0],
    modalWindow = document.querySelector('.modal'),
          close = document.querySelector('.close'),
          text  = document.getElementsByName('message')[0];


  function hover() {
  	heading.textContent = "It is the text"
  };

 function out() {
  	heading.textContent = "Все включено"
  }; 

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", out);


function onReceive() {
	modalWindow.style.display = "block"
};

receive.addEventListener('click', function() {
	modalWindow.style.display = "block"
});

close.addEventListener('click', function() {
	modalWindow.style.display = "none"
});

nameInput.addEventListener('input', function () {
	/*text.value = "Hi, My name is " + nameInput.value + ".And I want you: ";*/
   if(nameInput.value == ""){
   	   text.value = ""
   }else{
   	text.value = "Hi, My name is " + nameInput.value + ".And I want you: ";
   }

});