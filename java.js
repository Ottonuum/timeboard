const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const chores = parseInt(document.querySelector("#chores").value, 10);
  const videogames = parseInt(document.querySelector("#videogames").value, 10);
  const coding = parseInt(document.querySelector("#coding").value, 10);

  const totalHours = Math.floor((chores + videogames + coding) );
  const totalMinutes = (chores + videogames + coding);

  const remainingHours = 24 - new Date().getHours();
  const remainingMinutes = 60 - new Date().getMinutes();

  const remainingTotalMinutes = remainingHours * 60 + remainingMinutes - (chores + videogames + coding);
  const remainingHoursLeft = Math.floor(remainingTotalMinutes / 60);
  const remainingMinutesLeft = remainingTotalMinutes % 60;

  results.innerHTML = `You spent ${totalHours} hours and ${totalMinutes} minutes today.<br>You have ${remainingHoursLeft} hours and ${remainingMinutesLeft} minutes left in the day.`;
});