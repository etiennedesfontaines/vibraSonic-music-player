import { v4 as uuidv4 } from "uuid";

const musicData = () => {
	return [
		{
			songName: "Fly High Newborn",
			albumCover:"https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg", //prettier-ignore
			artist: "Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=55317",
			color: ["#D7CC9F", "#F2F1F0"],
			id: uuidv4(),
			active: true,
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
