function login()
{
  var u=document.getElementById("user").value;
  var p=document.getElementById("pass").value;
  var s=localStorage.getItem("username");
  var sp=localStorage.getItem("password");
  if (u===s && p===sp) {
    alert("Login Success");
    window.location.href="home.html";
  } 
  else 
  { 
    alert("Login Failed");
  }
}
function signup() {
  var su=document.getElementById("suser").value;
  var sp=document.getElementById("spass").value;
  if (su==="" && sp==="") {
    alert("Enter Info In fields");
    return;
  }
  localStorage.setItem("username",su);
  localStorage.setItem("password",sp);
  alert("Signup successful!");
  window.location.href="login.html";
}
