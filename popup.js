const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("Finished setting badge text");
  }
);

chrome.storage.sync.get(["name"]).then((result) => {
  const name = result.name ?? "?";
  nameElement.textContent = `Your name is: ${name}`;
});
