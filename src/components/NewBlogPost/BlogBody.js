import { useState } from 'react';

const BlogBody = () => {
	const [body, setBody] = useState('');

	return (
		<div className="create">
			<h2>Blog</h2>
			<form>
				<label> Blog Body</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}></textarea>

				<button>Add Blog</button>

				<p>{body}</p>
			</form>
		</div>
	);
};
export default BlogBody;
