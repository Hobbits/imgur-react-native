var React = require('react-native');
var {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} = React;

var Thumbnail = React.createClass({
	selectImage: function() {
		this.props.selectImage(this.props.thumbnail);
	},
	shouldComponentUpdate: function(nextProps) {
		return false;
	},
	render: function() {
		console.log('render thumbnail');
		var uri = 'http://i.imgur.com/' + this.props.thumbnail.id + 'b.jpg';
		return (
			<TouchableHighlight
				onPress={this.selectImage}>
				<Image 
					style={styles.thumbnail} 
					source={{uri: uri}} />
			</TouchableHighlight>
		);
	}
});

var styles = StyleSheet.create({
  thumbnail: {
  	height: 150,
  	width: 150,
  },
});

module.exports = Thumbnail;