const clock = document.getElementById("clock");
const timezone = document.getElementById("timezone");

function updateclock(){
	const timezone = timezoneSelect.value;
	const now = new Date().tolocaleTimeString("en-US",{timeZone: timezone});
	clock.textContent = now;
}
setinterval(updateclock,1500);
timezoneSelect.addEventListener("change",updateclock);
updateclock();