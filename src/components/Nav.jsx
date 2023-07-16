import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryIsOpen, setLibraryIsOpen }) => {
	return (
		<nav className="nav">
			<h1>VibraSonic</h1>
			<button onClick={() => setLibraryIsOpen(!libraryIsOpen)}>
				<p>Library</p>
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
