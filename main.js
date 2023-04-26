const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_aetAmX8Db5hHA5UIrsklk0LPP8MdrexFkK4VMwRM3UxlxXiVy1VRem1Y0XUKvJcH';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_aetAmX8Db5hHA5UIrsklk0LPP8MdrexFkK4VMwRM3UxlxXiVy1VRem1Y0XUKvJcH';

const spanError = document.getElementById('error');
const paraError = document.querySelector('.randoms-cats')

async function loadRandomCats() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
 
  console.log('myCat');
  console.log(data);

  if(res.status !== 200) {
    spanError.innerHTML = `
      <h2>Hubo un error: ${res.status}</h2>
      <img width="400px" height="300px" src="https://http.cat/401"></img>
    `;
    paraError.classList.add('none')
  } else{
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
  
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}
loadRandomCats();

async function loadFavoritesCats() {
  const res = await fetch(API_URL_FAVORITES);
  const data = await res.json();

  console.log('favoritesCats');
  console.log(data);

  if(res.status !== 200) {
    spanError.innerHTML = 'Hubo un error: ' + res.status;
  }
}
loadFavoritesCats();

async function saveFavouriteCats() {
  const res = await fetch(API_URL_FAVORITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      image_id: 'al0'
    }),
  });
  const data = await res.json();

  console.log('Save');
  console.log(res);

  if(res.status !== 200) {
    spanError.innerHTML = 'Hubo un error: ' + res.status;
  }
}


