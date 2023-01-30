import { useState } from 'react';

const BlogTitle = () => {
	const [title, setTitle] = useState('');

	return (
		<div className="create">
			<h2>Blog</h2>
			<form>
				<label>Blog Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<button>Add Blog</button>
				<p>{title}</p>
			</form>
		</div>
	);
};
export default BlogTitle;
