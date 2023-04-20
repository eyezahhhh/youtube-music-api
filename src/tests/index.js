const YoutubeMusicApi = require('../index.js');

const api = new YoutubeMusicApi()
api.initalize()
.then(info => {
	api.getSong("Fy7dTM301R4").then(result => {});
	api.search("ne deve ne kush", "song").then(result => {}) // just search for songs
	
})