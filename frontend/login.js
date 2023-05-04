const login = document.getElementById("login");
login.addEventListener("submit", onSubmit);

const email = document.getElementById("email");
const password = document.getElementById("password");

function onSubmit(e) {
  e.preventDefault();

  loginObj = {
    email: email.value,
    password: password.value,
  };

  axios
    .post("http://localhost:3000/user/login", loginObj)
    .then((response) => {
      alert(response.data.message);
      console.log(response.data.token);
    })
    .catch((err) => {
      console.log(err);
      //document.body.innerHTML +=
      //err +
      // `<button onclick="window.location.href = '../html/login.html'">Reload</button>`;
    });
}
