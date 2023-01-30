import { useState } from 'react';

const BlogAuthor = () => {
	const [author, setAuthor] = useState('luigi');

	return (
		<div className="create">
			<h2>Blog</h2>
			<form>
				<label>Blog Author</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
					<option value="luigi">luigi</option>
				</select>
				<button>Add Blog</button>

				<p>{author}</p>
			</form>
		</div>
	);
};
export default BlogAuthor;
