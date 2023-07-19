import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { v4 as uuidv4 } from "uuid";

const musicData = () => {
	return [
		{
			songName: "Nightfall",
			albumCover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: toBeRequired,
		},

		{
			songName: "Fly High Newborn",
			albumCover:"https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg", //prettier-ignore
			artist: "Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=55317",
			color: ["#D7CC9F", "#F2F1F0"],
			id: uuidv4(),
			active: false,
		},
		{
			songName: "See You Cross Country",
			albumCover:"https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg", //prettier-ignore
			artist: "Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=55315",
			color: ["#D7CC9F", "#F2F1F0"],
			id: uuidv4(),
			active: false,
		},

		{
			songName: "Keep Going",
			albumCover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			songName: "Reflection",
			albumCover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			songName: "Delicate",
			albumCover:"https://chillhop.com/wp-content/uploads/2023/02/ef337196272ee56d2e76383d39ed446b57472aec-1024x1024.jpg", //prettier-ignore
			artist: "Middle School, Henry Gritton",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=49381",
			color: ["#3E350B", "#F9F9F9"],
			id: uuidv4(),
			active: false,
		},
		{
			songName: "Cabriolet",
			albumCover:"https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg", //prettier-ignore
			artist: "Plusma, Ben Bada Boom",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
			color: ["#C8F8F8", "#D5C45C"],
			id: uuidv4(),
			active: false,
		},
	];
};

export default musicData;
