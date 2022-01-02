const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const img = document.getElementsByTagName('img')[0];
const btn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	img.src = await getCats();
};

loadImg();


btn.addEventListener('click', loadImg);


// Segui os passos do exercício, mas o server ta 404.