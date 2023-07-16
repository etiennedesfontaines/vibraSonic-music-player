import React from "react";
import LibrarySong from "./LibrarySong";

const AudioLibrary = ({ songs, setSongs, setCurrentSong, libraryIsOpen }) => {
	return (
		<div
			className={
				libraryIsOpen ? "audio-library audio-library--isOpen" : "audio-library"
			}
		>
			<h2>Library</h2>
			<div className="audio-library__songs">
				{songs.map((song) => (
					<LibrarySong
						songs={songs}
						setSongs={setSongs}
						song={song}
						setCurrentSong={setCurrentSong}
						key={song.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AudioLibrary;
