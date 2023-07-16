import React, { useState, useRef } from "react";
//import components
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import AudioLibrary from "./components/AudioLibrary";
import Footer from "./components/Footer";

//import data
import musicData from "./musicData";
//import styles
import "./styles/app.scss";

function App() {
	//state
	const [songs, setSongs] = useState(musicData());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryIsOpen, setLibraryIsOpen] = useState(false);

	return (
		<>
			<div className="App">
				<Nav
					libraryIsOpen={libraryIsOpen}
					setLibraryIsOpen={setLibraryIsOpen}
				/>
				<div>
					<Song currentSong={currentSong} setCurrentSong={setCurrentSong} />

					<Player
						songs={songs}
						setSongs={setSongs}
						currentSong={currentSong}
						setCurrentSong={setCurrentSong}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
					/>
				</div>
				<AudioLibrary
					libraryIsOpen={libraryIsOpen}
					songs={songs}
					setSongs={setSongs}
					setCurrentSong={setCurrentSong}
				/>
				<Footer />
			</div>
		</>
	);
}

export default App;
