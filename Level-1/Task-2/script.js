const colors=['red','blue','green','yellow','purple','orange','aqua','azure','beige','brown'];
let idx=0;
function colorChange(){
    idx=(idx+1)%colors.length;
    const button=document.getElementById('color');
    button.style.backgroundColor=colors[idx];
}
document.getElementById('greeting').addEventListener('click', displayGreeting);
function displayGreeting(){
    const currHour=new Date().getHours();
    let greeting1;
    if(currHour <12){
        greeting1="Good Morning!\nYou have a fantastic day!\nRemember to smile!  ";
    }
    else if(currHour<18){
        greeting1="Good afternoon!\nHope you're having a great day!\nKeep up the good work!";
    }
    else{
        greeting1="Good evening!\nHope you had a wonderful day!\nEnjoy your evening!";
    }
    alert(greeting1);
}


document.getElementById('add').addEventListener('click',addNumber);
function addNumber(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        alert("Please enter valid number");
        return;
    }
    const sum=num1+num2;
      document.getElementById('answer').textContent=`Result:${sum}`;
}
