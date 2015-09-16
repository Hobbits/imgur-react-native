var deviceWidth = require('Dimensions').get('window').width;

var obj = {  
  method: 'GET',
  headers: {
    Authorization: 'Client-ID YOUR_CLIENT_ID',
  }
};

module.exports = {
	getGallery: function(viral) {
    return fetch('https://api.imgur.com/3/gallery/hot/viral/0.json', obj)  
      .then(function(res) {
        return res.json();
       })
      .then(function(resJson) {
        return resJson;
       })
	},	
	getThumbnail: function(id) {
		return 'http://i.imgur.com/' + id + 'b.jpg';
	},
	getDimensions: function(image) {
		var proportion = image.width/image.height;
    var height = deviceWidth/proportion;
    return {
    	height: height,
    	width: deviceWidth,
    };
	},
};