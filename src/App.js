import React, { useState, useEffect } from 'react';

import axios from 'axios';

const client = axios.create({
	baseURL: 'http://localhost:3000/posts',
});

const App = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);
	const [votes, setVotes] = useState('');
	const [selectedPost, setSelectedPost] = useState(null);
	const [viewingPost, setViewingPost] = useState(null);

// GET WITH AXIOS: FETCHING
	const fetchPosts = async () => {
		try {
			let response = await client.get('?_limit=6');
			setPosts(response.data);
		} catch (error) {
			console.error('Error fetching posts:', error.message);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

// DELETE DATA FROM DB
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

//POST WITH AXIOS
	const addPost = async () => {
	if(title=='' && body=='') return;
		try {
			let response = await client.post('', {
				title: title,
				body: body,
				votes: 0 ,
			});
			setPosts([response.data, ...posts]);
			setTitle('');
			setBody('');
			setVotes()
		} catch (error) {
			console.error('Error adding post:', error.message);
		}
	};

//UPDATING USING PUT
	const updatePost = async () => {
		if (!selectedPost) return;
        if(title=='' && body=='') return;
		try {

			let response = await client.put(`${selectedPost.id}`, {
				title: title,
				body: body, votes:selectedPost.votes,
			}); fetchPosts();
			setTitle('');
			setBody('');
            setVotes(votes);


			setSelectedPost(null)
		}catch (error) {
			console.error('Error updating post:', error.message);
		}
	};

//MONITORING UPVOTE COUNT USING PUT
	const upvotePost = async (post) => {
		try {
			await client.put(`${post.id}`, {
			title:post.title,
			body:post.body,
			votes:post.votes+1,
			});
			fetchPosts();

		}catch (error) {
			console.error('Error upvoting post:', error.message);
		}
	};

//MONITORING DOWNVOTE COUNT USING PUT
const downvotePost = async (post) => {
		try {
			await client.put(`${post.id}`, {
			title:post.title,
			body:post.body,
			votes:post.votes-1,
			});
			fetchPosts();
		}catch (error) {
			console.error('Error downvoting post:', error.message);
		}
	};


	const selectPostForUpdate = (post) => {
		setTitle(post.title);
		setBody(post.body);
		setSelectedPost(post);
		updatePost();
	};

	return (
		<div className="app">
			<nav>
				<h1>REST using Axios Posts/Voting App </h1>

			</nav>
			<div className="add-post-container">
				<form onSubmit={(e) => {
					e.preventDefault();
					if (selectedPost) {
						updatePost();
					} else {
						addPost();
					}
				}}>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
						cols="10"
						rows="8"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
					<button type="submit">{selectedPost ? 'Update Post' : 'Add Post'}</button>
				</form>
			</div>
			<div className="posts-container">
				<h2>All Posts 📫</h2>
				{posts.map((post) => (
					<div className="post-card" key={post.id}>
						<h2 className="post-title">{post.title}</h2>
						<p className="post-body">{post.body}</p>
						<p className="post-body">{post.votes}</p>
						<div className="button">
							<div className="delete-btn" onClick={() => deletePost(post.id)}>
								Delete
							</div>
						</div>
						<div className="button">
							<div className="delete-btn" onClick={() => selectPostForUpdate(post)}>
								Edit
							</div>
						</div>

						<div className="button">
							<div className="delete-btn" onClick={() => upvotePost(post)}>
								UPVOTE
							</div>
						</div>

						<div className="button">
							<div className="delete-btn" onClick={() => downvotePost(post)}>
								DOWNVOTE
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;