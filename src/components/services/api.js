import axios from "axios";

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});


async function getUsers() {
	let users = await axiosInstance.get('/users');
	return users.data;
}

async function getPosts() {
	let posts = await axiosInstance.get('/posts');

	return posts.data;
}

async function getUser(userId) {
	let user = await axiosInstance.get(`/users/${userId}`);

	return user.data;
}

export {getUsers, getPosts, getUser};