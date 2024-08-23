const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.dev/api/";

	const saveToLocalStorage = (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
	};

	const getFromLocalStorage = (key) => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : [];
	};

	const fetchDataIfNeeded = (category, apiEndPoint, localStorageKey) => {
		const store = getStore();
		if (Array.isArray(store[category]) && store[category].length === 0) {
			fetch(apiUrl + apiEndPoint)
				.then(resp => resp.json())
				.then(data => {
					setStore({ [category]: data.results });
					saveToLocalStorage(localStorageKey, data.results);
				})
				.catch(error => console.log(`Error fetching ${category}:`, error));
		}
	};

	return {
		store: {
			characters: getFromLocalStorage('characters'),
			planets: getFromLocalStorage('planets'),
			starships: getFromLocalStorage('starships'),
			favorites: getFromLocalStorage('favorites')
		},
		actions: {

			getCharacters: () => fetchDataIfNeeded('characters', 'people', 'characters'),
			getPlanets: () => fetchDataIfNeeded('planets', 'planets', 'planets'),
			getStarships: () => fetchDataIfNeeded('starships', 'starships', 'starships'),

			addFavorites: (favItem) => {
				const newFavorites = [...getStore().favorites, favItem]
				setStore({ favorites: newFavorites });
				saveToLocalStorage('favorites', newFavorites);
			},
			deleteFavorites: (index) => {
				const newFavorites = getStore().favorites.filter((_, i) => i !== index);
				setStore({ favorites: newFavorites });
				saveToLocalStorage('favorites', newFavorites);
			}
		}
	};
};


export default getState;