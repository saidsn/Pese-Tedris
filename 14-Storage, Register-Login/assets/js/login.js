document.addEventListener("DOMContentLoaded", () => {
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  let form = document.querySelector("form");

  let users = JSON.parse(localStorage.getItem("users"));

  function Login(e) {
    e.preventDefault();

    let findUser = users.find(
      (user) =>
        user.username == username.value && user.password == password.value
    );

    if (findUser) {
      findUser.isLogined = true;
      localStorage.setItem("users", JSON.stringify(users));
      SweetToast("Login successfully...");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    }
  }

  form.addEventListener("submit", Login);
});

function SweetToast(text) {
  Toastify({
    text: `${text}`,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    positionRight: true, // `true` or `false`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}
