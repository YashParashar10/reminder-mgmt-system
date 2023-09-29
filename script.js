document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "yash" && password === "jiet") {
      sessionStorage.setItem("username", username);

      window.location.href = "welcome.html";
    } else {
      window.location.href = "login-failed.html";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const usernameElement = document.getElementById("username");
  const currentDateElement = document.getElementById("current-date");

  const username = sessionStorage.getItem("username");

  function updateDateAndTime() {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    currentDateElement.textContent = formattedDate;
  }

  usernameElement.textContent = `${username}`;
  updateDateAndTime();
});
