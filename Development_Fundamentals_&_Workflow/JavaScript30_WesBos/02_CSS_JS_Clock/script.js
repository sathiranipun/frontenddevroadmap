const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360;
  const hourDegrees = (hours / 12) * 360;
  
  secondHand.style.transform = `rotate(${secondDegrees + 90}deg )`;
  minuteHand.style.transform = `rotate(${minuteDegrees + 90}deg )`;
  hourHand.style.transform = `rotate(${hourDegrees + 90}deg )`;

  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");

  hourtwelewe = hours % 12 || 12;
  hour.innerText = String(hourtwelewe).padStart(2, "0");
  minute.innerText = String(minutes).padStart(2, "0");
  second.innerText = String(seconds).padStart(2, "0");
}

setInterval(setDate, 1000);
