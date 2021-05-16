import {useEffect, useState} from "react";
import {getUser} from '../services/api';

export default function Post({post}) {
	let [user, setUser] = useState([]);

	useEffect(async () => {
		let user = await getUser(post.userId);
		setUser(user);
	}, []);

	return (
		<div>
			<div>Text: {post.title}</div>
			<div>Author: {user.name}</div>
			<hr/>
		</div>
	);
}