const body = document.querySelector("body");
const modeSwitch = document.querySelector(".mode-switch");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

// Add a click event listener to the element
modeSwitch.addEventListener("click", () => {
  // Log the text content of the element
  console.log(modeSwitch.textContent);
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

const updateTime = () => {
  //get current time and calculate degrees for clock hands.
  let date = new Date();

  second_ratio = date.getSeconds() / 60;
  secToDeg = second_ratio * 360;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;

  minutes_ratio = (second_ratio + date.getMinutes()) / 60;
  minToDeg = minutes_ratio * 360;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;

  hours_ratio = (minutes_ratio + date.getHours()) / 12;
  hourToDeg = hours_ratio * 360;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;

  console.log(
    date.getSeconds() + " " + date.getMinutes() + " " + date.getHours()
  );
  console.log(secToDeg, minToDeg, hourToDeg);
};
//call update time to set clock hands every second.
setInterval(updateTime, 1000);
