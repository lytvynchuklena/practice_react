import axios from "axios";

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});


async function getUsers() {
	let users = await axiosInstance.get('/users');
	return users.data;
}

async function getPosts() {
	return await axiosInstance.get('/posts');
}

export  {getUsers, getPosts};