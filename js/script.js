// Обробник для кнопки на головній сторінці
document.getElementById("learnMore")?.addEventListener("click", () => {
  alert("Дякуємо за інтерес до нашого проєкту!");
});

// Валідація форми входу
document.getElementById("loginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const usernameRegex = /^[a-zA-Z0-9._]{3,16}$/;
  const passwordRegex = /^\d{6,}$/;

  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    alert("Ви успішно увійшли!");
    window.location.href = "/ptofile.html";
  } else {
    errorMessage.textContent = "Невірний логін або пароль.";
    console.log("Username valid:", usernameRegex.test(username));
    console.log("Password valid:", passwordRegex.test(password));
  }
});
