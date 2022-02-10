(function () {
  'use strict';
  // this function is strict...
})();

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let obtainedScore = 20;
let highScore = 0;

const messageFunction = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputnumber = Number(document.querySelector('.inputnumber').value);
  console.log(inputnumber, typeof inputnumber);

  if (!inputnumber) {
    messageFunction('⛔️ (1️⃣ - 2️⃣0️⃣)మధ్యలో ఒక నంబర్ రాసి నోక్కు రా అయ్యా ⛔️');
  } else if (inputnumber === secretNumber) {
    messageFunction('కరెక్ట్ రా 🏆, మస్తు చెప్తివి రా 🎉');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#0DF74D';
    document.querySelector('.question').style.width = '50rem';

    if (obtainedScore > highScore) {
      highScore = obtainedScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputnumber !== secretNumber) {
    if (obtainedScore > 1) {
      messageFunction(
        inputnumber > secretNumber
          ? 'కొంచెం ఎక్కువ నొక్కావ్ చూసుకో బే 📈'
          : 'ఎం అబ్బి తక్కువైంది చూసుకోబల్లె 📉'
      );
      obtainedScore--;
      document.querySelector('.score').textContent = obtainedScore;
    } else {
      messageFunction('🥲 ఒడిపోతివి రా బుల్లోడా!! 💣');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F41A0C';
    }
  }
});

document.querySelector('.buttonreset').addEventListener('click', function () {
  obtainedScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageFunction('ఆలోచించి ఓక నంబర్ నల్ల డబ్బాలో రాయి 🤔');
  document.querySelector('.score').textContent = obtainedScore;
  document.querySelector('.question').textContent = 'ఎలా కన్నుకుంటవో చూస్తా 😜';
  document.querySelector('.inputnumber').value = '';
  document.querySelector('body').style.backgroundColor = '#2BA6BA';
  document.querySelector('.question').style.width = '50rem';
});
