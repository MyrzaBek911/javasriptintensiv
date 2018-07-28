function myFirstApp (name, age) {
	
	alert("Hi my name is " + name + " and this my first app in JS")

  function showSkills () {
  	  let skills = ['Java','Python','HTML','CSS'];

  	  for(let i = 0; i<skills.length; i++){
       document.write('I know PL ' + skills[i] +'<br>');
  	  }
  }

  showSkills();

   function checkAge () {
        if(age > 18){
       alert('You are over 18 years old');
        }else{
          alert('You are not 18');
        }
   }

  checkAge ()
  function calcPow (num) {
  	console.log(num*num);
  }

 calcPow(5);
};

myFirstApp('Myrza', 19 )