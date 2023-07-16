import React from "react";

const Song = ({ currentSong }) => {
	return (
		<div className="song">
			<img src={currentSong.albumCover} alt="" />
			<h2>{currentSong.songName}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
