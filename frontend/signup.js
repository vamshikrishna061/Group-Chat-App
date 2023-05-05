const signup = document.getElementById("signup");
signup.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let signupObj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    number: document.getElementById("number").value,
  };
  axios
    .post("http://localhost:3000/user/signup", signupObj)
    .then((response) => {
      console.log(response.data.message);
      //alert(`User signup sucessfull`);
      alert(response.data.message);
      window.location.href = "./login.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
