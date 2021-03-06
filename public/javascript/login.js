const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log(err));
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
