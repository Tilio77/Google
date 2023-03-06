import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
	key: "AIzaSyAzt67p38iooZdvyQyTw-5iborIemgHzgI",
	cx: "36979f5c7a37a4aad"
};

export const fetchDataFromApi = async (payload) => {
	const { data } = await axios.get(BASE_URL, {
		params: {...params, ...payload}
	})

	return data;
};