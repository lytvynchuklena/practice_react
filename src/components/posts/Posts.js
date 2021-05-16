import {useEffect, useState} from "react";
import {getPosts} from '../services/api';
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {
	let [posts, setPosts] = useState([]);

	useEffect(async () => {
		let posts = await getPosts();
		setPosts([...posts]);
	}, []);

	return (
		<div className={'wrap'}>
			<div className={'posts-box'}>
				<ul>
					{
						posts.map(value => <Post key={value.id} post={value}/>)
					}
				</ul>
			</div>

		</div>
	);
}