alert(Date());

function change(){
	document.getElementById('pic').src ='https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg'

}

function change2(){
	document.getElementById('demo').innerHTML='this is a pratices'
}
function showAlert() {
    alert ("Hello world!");
  }
  function change3(){
  	var select = document.getElementById('three');
  	select.style.backgroundColor = 'red';
  	select.style.fontFamily = 'Arial';
  	select.style.textAlign = 'center';
  }

function sum(){
	var n1 = parseFloat(prompt('first number'));
	var n2 = parseFloat(prompt('second number'));
	document.getElementById('ee').innerHTML=n1+n2;

}
function change9(){
	var select = document.getElementById('qq');
	var ftoc = -12*5/9
	document.getElementById('qq').innerHTML = ftoc
}
function change5(){
	var a = prompt('your first name');
	var b = prompt('your second name');
	document.getElementById('sev').innerHTML="nice to meet you"+a+b;
}
change5()
