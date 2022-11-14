import people from './people.js';
let answer = document.querySelector('.answer');
let message = document.querySelector('.alert');
let body = document.querySelector('.image');

// console.log(people);
// console.log(Object.keys(people));
let bDs_dates = Object.keys(people);

let today = new Date();

console.log(today.getMonth() + 1);

let thisMonth = today.getMonth() + 1;
let thisDay = today.getDate();

if (thisMonth === 9 || thisMonth === 10 || thisMonth === 11) {
  console.log(body);
  body.classList.add('autumn');
}

if (thisMonth === 12 || thisMonth === 1 || thisMonth === 2) {
  console.log(body);
  body.classList.add('winter');
}

if (thisMonth === 3 || thisMonth === 4 || thisMonth === 5) {
  console.log(body);
  body.classList.add('spring');
}

if (thisMonth === 6 || thisMonth === 7 || thisMonth === 8) {
  console.log(body);
  body.classList.add('summer');
}

for (const date of bDs_dates) {
  let bDMonth = date.slice(3, 5);
  let bDDay = date.slice(0, 2);

  if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay)) {
    answer.textContent = 'YES';
    createMessage(date, 'today');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 1) {
    createMessage(date, 'one_day');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 2) {
    createMessage(date, 'two_days');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 3) {
    createMessage(date, 'three_days');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 4) {
    createMessage(date, 'four_days');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 5) {
    createMessage(date, 'five-days');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 6) {
    createMessage(date, 'six_days');
  } else if (thisMonth === Number(bDMonth) && thisDay === Number(bDDay) - 7) {
    createMessage(date, 'seven_days');
  }
}

function createMessage(date, class_name) {
  let idx = bDs_dates.indexOf(date);
  let name = Object.values(people)[idx];
  let messageContent = document.createElement('div');
  messageContent.classList.add('message');
  messageContent.classList.add(class_name);
  messageContent.textContent = name;

  message.append(messageContent);
}
