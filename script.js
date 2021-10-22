var urName = ;

function saveName() {
  //get value from input field and save as "a"
  urName = document.getElementById('nameOfUser').value;
  
  //create LS key with value of "a"
  localStorage.setItem('uName',a);
  
  //automatically take user to page two.html
  location.href = "two.html";
  
  window.alert(urName);
}



function getUser() {
  var b = localStorage.getItem('uName');
  document.getElementById("placeholder").innerHTML = "hello " + b; 
}
