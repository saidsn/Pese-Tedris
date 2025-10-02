document.addEventListener("DOMContentLoaded", () => {
  let name = document.querySelector("#name");
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmpassword");

  let form = document.querySelector("form");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  function Register(e) {
    e.preventDefault();

    let uniqueUser = users.some(
      (user) => user.username == username.value && user.email == email.value
    );

    if (!uniqueUser) {
      let newUser = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        id: uuidv4(),
        isLogined: false,
        basket:[]
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      SweetToast("register successfully...");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    }
  }

  form.addEventListener("submit", Register);
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
