export default function Header(props) {
	return (
		<header className="app-header">
			<h1 className="header">{props.name}</h1>
               <h2 class ="subheader">Better-Dressed People</h2>
          </header>
	);
}
