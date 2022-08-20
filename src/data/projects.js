// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Alnawras Express',
		category: 'Web Application',
		img: require('@/assets/images/alnawras-express.png'),
	},
	{
		id: 2,
		title: 'OLT Control Panel',
		category: 'Web Application',
		img: require('@/assets/images/molt.png'),
	},
	{
		id: 3,
		title: 'Survehub',
		category: 'Web Application',
		img: require('@/assets/images/survehub.png'),
	},
	{
		id: 4,
		title: 'Hiring Crowd',
		category: 'Web Application',
		img: require('@/assets/images/hiring-crowd.png'),
	},
	{
		id: 5,
		title: 'Flance',
		category: 'Web Application',
		img: require('@/assets/images/flance.png'),
	}
];

export default projects;
