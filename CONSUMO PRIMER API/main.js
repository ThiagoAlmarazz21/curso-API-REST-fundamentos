const URL = 'https://api.thecatapi.com/v1/images/search';

async function myCat () {
    const res = await fetch(URL);
    const data = await res.json();
    const img = 
    document.querySelector('img');
      img.src = data[0].url;
}

const button = document.querySelector('.boton');
button.onclick = myCat;

myCat();

