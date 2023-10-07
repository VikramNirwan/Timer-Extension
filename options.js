const nameInput = document.getElementById("name-input");

const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  //   console.log(name);
  chrome.storage.sync.set({ name }).then(() => {
    console.log(`The name is ${name}`);
  });
});

chrome.storage.sync.get(["name"]).then((result) => {
  nameInput.value = res.name;
});
