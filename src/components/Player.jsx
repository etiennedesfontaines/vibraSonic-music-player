import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	songs,
	setSongs,
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
}) => {
	//state
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: null,
		songPositionPercentage: 0,
	});

	//Ref
	const audioRef = useRef(null);

	//handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();

			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};
	const songInfoHandler = (e) => {
		//I'm uncertain why the spread operator is necessary?
		//I've checked it and at the point of this query, removing it has no affect.
		const current = e.target.currentTime;
		const duration = e.target.duration;
		//calculate percentage:
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const songPositionPercentage = Math.round(
			(roundedCurrent / roundedDuration) * 100
		);

		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			songPositionPercentage,
		});
	};

	const songPositionSliderHandler = (e) => {
		setSongInfo({ ...songInfo, currentTime: e.target.value });
		audioRef.current.currentTime = e.target.value;
	};

	const updateActiveSongs = (prevNextSong) => {
		const updatedSongs = songs.map((sng) =>
			sng.id !== prevNextSong.id
				? { ...sng, active: false }
				: { ...sng, active: true }
		);
		setSongs(updatedSongs);
	};

	const skipTrackHandler = (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "forward") {
			setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			updateActiveSongs(songs[(currentIndex + 1) % songs.length]);
		} else {
			if ((currentIndex - 1) % songs.length === -1) {
				setCurrentSong(songs[songs.length - 1]);
				updateActiveSongs(songs[songs.length - 1]);
			} else {
				setCurrentSong(songs[(currentIndex - 1) % songs.length]);
				updateActiveSongs(songs[(currentIndex - 1) % songs.length]);
			}
		}
	};
	//Functions
	const formatTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const autoPlaySong = () => {
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	//styles
	const positionSliderAnimation = {
		transform: `translateX(${songInfo.songPositionPercentage}%)`,
	};
	const positionSliderColor = {
		backgroundImage: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
	};
	return (
		<div className="player">
			<div className="time-control">
				<p>{formatTime(songInfo.currentTime)}</p>
				<div className="position-slider-container" style={positionSliderColor}>
					<input
						type="range"
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						onChange={songPositionSliderHandler}
					/>
					<div
						className="animate-position-slider-container"
						style={positionSliderAnimation}
					></div>
				</div>
				<p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon
					className="skip-back"
					icon={faAngleLeft}
					size="2x"
					onClick={() => skipTrackHandler("back")}
				/>
				<FontAwesomeIcon
					className="play"
					icon={isPlaying ? faPause : faPlay}
					size="2x"
					onClick={playSongHandler}
				/>
				<FontAwesomeIcon
					className="skip-forward"
					icon={faAngleRight}
					size="2x"
					onClick={() => skipTrackHandler("forward")}
				/>
			</div>
			<audio
				src={currentSong.audio}
				ref={audioRef}
				onLoadedData={autoPlaySong}
				onLoadedMetadata={songInfoHandler}
				onTimeUpdate={songInfoHandler}
				onEnded={() => skipTrackHandler()}
			></audio>
		</div>
	);
};

export default Player;
