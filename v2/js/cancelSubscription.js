// Form elements
const form = document.getElementById('cancel-subscription-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');
const orderId = document.getElementById('order-id');
const commentsBox = document.getElementById('comments-box');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form submit triggered.");
});