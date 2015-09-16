var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var Post = React.createClass({
	render: function() {
		return (
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={{uri: 'http://i.imgur.com/CNIvrW0.jpg'}}
        />
			</View>
		);
	}
});

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});

module.exports = Post;
