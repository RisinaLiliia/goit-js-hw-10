import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const form = event.target;
  const delay = parseInt(form.delay.value, 10); // Отримуємо затримку в мс
  const state = form.state.value; // Отримуємо стан (fulfilled або rejected)

  createPromise(delay, state)
    .then((message) => {
      iziToast.success({
        title: "Success",
        message: message,
        position: "topRight",
      });
    })
    .catch((message) => {
      iziToast.error({
        title: "Error",
        message: message,
        position: "topRight",
      });
    });
});

/**
 * Функція для створення промісу з переданою затримкою та станом
 * @param {number} delay - Затримка в мс
 * @param {string} state - Стан промісу: fulfilled або rejected
 * @returns {Promise<string>}
 */
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `${
        state === "fulfilled" ? "✅ Fulfilled" : "❌ Rejected"
      } promise in ${delay}ms`;
      state === "fulfilled" ? resolve(message) : reject(message);
    }, delay);
  });
}
