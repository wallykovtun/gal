// ==UserScript==
// @name         Мой скрипт для galxe
// @namespace    your-namespace
// @version      1.0
// @description  Описание вашего скрипта
// @match        https://galxe.com/*
// @grant        none
// ==/UserScript==

window.onload = (function() {
  'use strict';

  // Функция для нажатия кнопки с задержкой
  function clickButtonWithDelay(buttonText, delay) {
    const buttons = document.querySelectorAll('button'); // Получаем все кнопки на странице
    buttons.forEach((button, index) => {
      if (button.innerText.includes(buttonText)) { // Проверяем текст на кнопке
        setTimeout(() => {
          button.click(); // Нажимаем кнопку с задержкой
        }, delay * index);
      }
    });
  }

  // Задержка перед выполнением скрипта (в миллисекундах)
  const delayBeforeExecution = 500;

  // Функция для проверки и нажатия кнопки "Verify"
  function checkAndClickVerifyButton() {
    const buttons = document.querySelectorAll('button');
    const isAnyButtonActive = Array.from(buttons).some(button => !button.disabled);

    if (!isAnyButtonActive) {
      const verifyButton = document.querySelector('button[data-testid="verify-button"]');
      if (verifyButton) {
        setTimeout(() => {
          verifyButton.click(); // Нажимаем кнопку "Verify"
        }, delayBeforeExecution);
      }
    }
  }

  // Основная функция скрипта
  function main() {
    // Нажимаем кнопку "+ Follow"
    const followButton = document.querySelector('div.space-follow-btn');
    if (followButton) {
      setTimeout(() => {
        followButton.click(); // Нажимаем кнопку "+ Follow"
      }, delayBeforeExecution);
    }

    // Нажимаем остальные кнопки с задержкой
    clickButtonWithDelay('Follow', delayBeforeExecution);
    clickButtonWithDelay('Retweet Now', delayBeforeExecution);
    clickButtonWithDelay('Quote Now', delayBeforeExecution);
    clickButtonWithDelay('Like', delayBeforeExecution);
    clickButtonWithDelay('Join', delayBeforeExecution);
    clickButtonWithDelay('Participate', delayBeforeExecution);
    clickButtonWithDelay('Claim', delayBeforeExecution);
    clickButtonWithDelay('Go', delayBeforeExecution);

    // Проверяем и нажимаем кнопку "Verify"
    checkAndClickVerifyButton();
  }

  // Ожидаем полной загрузки страницы и запускаем скрипт с задержкой
  setTimeout(() => {
    main(); // Запускаем основную функцию скрипта
  }, delayBeforeExecution);
});
