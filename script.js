const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBtn = document.getElementById('search-btn');
const result = document.getElementById('result');
const sound = document.getElementById('sound');


searchBtn.addEventListener('click', getList);

function getList () {
  let searchInputTxt = document.getElementById('placeholder').value;
  fetch(`${url}${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    result.innerHTML = `
      <div id="word-box">
          <h2 id="word">${searchInputTxt}</h2>
          <button id="sound">🔊</button>
        </div>
        <div id="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetics[0].text}</p>
          <h4 id="synonim">${data[0].meanings[0].definitions[0].definition}</h4>
        </div>
    `;
    
  })
}