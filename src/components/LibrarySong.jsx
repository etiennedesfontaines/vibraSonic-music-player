import React from "react";

const LibrarySong = ({ songs, setSongs, song, setCurrentSong }) => {
	const selectSongHandler = () => {
		setCurrentSong(song);
		const updatedSongs = songs.map((sng) =>
			sng !== song ? { ...sng, active: false } : { ...sng, active: true }
		);
		setSongs(updatedSongs);
	};

	return (
		<div
			className={song.active ? "library-song selected" : "library-song"}
			data-test="testing"
			onClick={selectSongHandler}
		>
			<img src={song.albumCover} alt="" />
			<div className="song-info">
				<h2>{song.songName}</h2>
				<h3>{song.artist}</h3>
			</div>
		</div>
	);
};

export default LibrarySong;
