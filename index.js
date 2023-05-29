const togglebtn = document.getElementById('togglebtn');
const toggleMenu = document.getElementById('container');
const closebtn = document.getElementById('closebtn');
const mobilePopUp = () => {
  togglebtn.addEventListener('click', () => {
    toggleMenu.style.display = 'block';
  });
};
mobilePopUp();
const closePopUp = () => {
  closebtn.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
  });
};
closePopUp();

const Places = [{
  img: 'Images/Fairy-Meadows-Naran.jpg',
  placename: 'Naran Fairy Meadows',
  placeintro: 'A lush green meadows at the base of world 9th highest mountain.',
  placedesc: 'Naran Kaghan is famous as a tourist destination, owing to its pleasant weather in peak season every year thousands of tourists rush to explore the valley. It is also the gateway to Gilgit Hunza in Summers by Babusar Pass. Naran Bazaar is very crowded in the summers with hotels and restaurants offering their services.',
},
{
  img: 'Images/swat-kalam-malam-jabba.jpg',
  placename: 'Swat Kalam',
  placeintro: 'Kalam is a charming valley is located in upper Swat at a distance of 96km (59 miles) from Mingora.',
  placedesc: 'Swat also know as Switzerland of Asia offers Saidu Shareef, Malam Jabba, Miandam, Bahrain and Marghazar as major tourist destinations. The highest peak of swat is Flaksair (20,528 ft.) and can be viewed for Matilda. Swat is 250 km away from Islamabad with a total drive time of 5 hours through motorway.',
},
{
  img: 'Images/Lahore-Badshahi-Mosque.jpg',
  placename: 'Lahore',
  placeintro: 'Lahore is the City of Gardens and Cultural History, Delicious Food.',
  placedesc: 'Lahore, the vibrant cultural capital of Pakistan, is a city that mesmerizes with its sheer beauty and historical splendor. Known as the "City of Gardens," Lahore boasts a rich heritage that dates back centuries. From its stunning Mughal-era architecture to its bustling bazaars and tree-lined avenues, Lahore captures the essence of a bygone era while embracing the modern world.',
},
{
  img: 'Images/Murree-Snowfall.jpg',
  placename: 'Muree-Hills',
  placeintro: 'Muree is the most famous hill resort in Pakistan.In muree you can enjoy chair lift ,snow fall.',
  placedesc: 'Murree is a picturesque hill station located in the Pir Panjal Range of the Himalayas, in Pakistan Punjab province. It is a popular tourist destination known for its scenic beauty, cool climate, and lush greenery.',
},
{
  img: 'Images/Shangrila_resort_skardu-.jpg',
  placename: 'Skardu Resort',
  placeintro: 'Skardu, famous for climbing, mountaineering all around the world. ',
  placedesc: 'Skardu serves as the capital of Skardu District and the Baltistan Division. It is situated at an elevation of nearly 2,500 metres (8,202 feet) in the Skardu Valley, at the confluence of the Indus and Shigar Rivers.',
},
{
  img: 'Images/Kumrat-Valley.jpg',
  placename: 'Kumrat Valley',
  placeintro: 'This Valley is stunning natural beauty, snow-capped mountains, sparkling rivers, and magnificent waterfalls.',
  placedesc: 'Kumrat Valley is situated in District Upper Dir KPK Pakistan & adjacent to Swat Valley and Chital Kalash Valley. Kumrat Valley and Swat Kohistan are connected via Badgoye Pass, while Kalash Valley is connected through Kashken Top. The Badge Top is also a Picnic Spot and containing Outsized and Lime Parklands.',
}];

const display = document.getElementById('featured');
function show(objects) {
  display.innerHTML += `
  <div class = "places">
  <div class = "place-images">
  <img class = "board" src="Images/Chess_Board.png">
  <img class = "place" src = "${Places[objects].img}">
  </div>
  <div class = "detials">
  <h2>${Places[objects].placename}</h2>
  <h4>${Places[objects].placeintro}</h4>
 <hr>
 <p>${Places[objects].placedesc}</p>
 </div>
 </div>`;
}

for (let i = 0; i < Places.length; i += 1) {
  show(i);
}
