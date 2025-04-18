const apiURL = " 	https://api.adviceslip.com/advice";
const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const genButton = document.getElementById("generator-button");

genButton.addEventListener("click", (event) => {
  fetch(apiURL)
    .then((rawData) => rawData.json())
    .then((data) => {
      console.log(data.slip);

      const { id, advice } = data.slip;
      adviceID.innerText = `ADVICE #${id}`;
      adviceText.innerText = `"${advice}"`;
    });
});
