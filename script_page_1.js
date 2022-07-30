document.querySelector("form").onsubmit = function (event) {
  let email = document.querySelector("input[value]").value;
  let message = document.querySelector(".subscription-block > p");
  message.innerHTML = `Адрес ${email} добавлен в список получателей рассылки.`;
  event.preventDefault();
};
