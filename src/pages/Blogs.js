import Header from "../components/BlogsPage/Header";
import Nav from "../components/BlogsPage/Nav";
import Article from "../components/BlogsPage/Article";
import Footer from "../components/BlogsPage/Footer";

export default function Blogs(props) {
	// LOOP OVER THE ARRAY OF DATA AND CREATE A CARD FOR EACH OBJECT
	// ARRAY METHODS: .forEach, .filter, .reduce
	// .map( (element, indexPos))
	
		return (
               <>
			<Header />
      <Nav />
      <Article />
      <Footer />
      </>
		);
	};