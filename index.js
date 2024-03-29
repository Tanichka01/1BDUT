// Отримуємо елемент div з id="content"
let content = document.getElementById("content");

// Створюємо заголовок h1 для назви центру творчості
let title = document.createElement("h1");
title.textContent = "БДЮТ - Будинок дитячої та юнацької творчості Христинівської міської ради Черкаської області";

// Додаємо заголовок до елементу content
content.appendChild(title);

// Створюємо абзац з описом центру творчості
let description = document.createElement("p");
description.textContent = "БДЮТ - це місце, де ваша дитина знайде своє захоплення, зустріне справжніх друзів та однодумців, з користю проведе час та розвинеться";

// Додаємо абзац до елементу content
content.appendChild(description);

// Створюємо список ul для переліку послуг
let servicesList = document.createElement("ul");

let services = ["Service 1", "Service 2", "Service 3"];

// Додаємо кожну послугу у вигляді елемента списку до servicesList
services.forEach(function(service) {
    let serviceItem = document.createElement("li");
    serviceItem.textContent = service;
    servicesList.appendChild(serviceItem);
});

// Додаємо список послуг до елементу content
content.appendChild(servicesList);

// Створюємо зображення для додавання на веб-сайт
let image = document.createElement("img");
image.src = "https://example.com/creative-center.jpg";
image.alt = "Будинок дитячої творчості";

// Додаємо зображення до елементу content
content.appendChild(image);
