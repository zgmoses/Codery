const tabs = document.querySelectorAll(".cd-auth-tab");
const forms = document.querySelectorAll(".cd-auth-form");
const switchButtons = document.querySelectorAll("[data-switch]");

function setActiveForm(tabName) {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  forms.forEach((form) => {
    const isLogin = tabName === "login" && form.id === "loginForm";
    const isRegister = tabName === "register" && form.id === "registerForm";

    form.classList.toggle("active", isLogin || isRegister);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveForm(tab.dataset.tab);
  });
});

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveForm(button.dataset.switch);
  });
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Login berhasil untuk demo.");
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Akun berhasil dibuat untuk demo.");
});
