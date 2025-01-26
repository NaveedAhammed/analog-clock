// Elements selection
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
	const curentDate = new Date();
	const secondsRatio = curentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + curentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + curentDate.getHours()) / 12;

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock, 1000);
