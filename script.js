const dex = document.getElementById('dex');
const BASE_URL = "https://jak-api-dot-com.herokuapp.com";

const fetchLanguages = async () => {
    const url = `${BASE_URL}/api/hobby/1`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const languages = data.languages.map((result, index) => ({
		...result,
		id: index + 1,
		_imageURL: `${BASE_URL}/${result.imageURL}`
	}));
	displayLanguages(languages);
};

const displayLanguages = (languages) => {
    const languagesHTMLString = languages
        .map((language) => (`
			<li class="card">
				<img class="card-image" src="${language._imageURL}"/>
				<h2 class="card-title">${language.id}. ${language.value}</h2>
			</li>
		`)).join('');
    dex.innerHTML = languagesHTMLString;
};

fetchLanguages();
