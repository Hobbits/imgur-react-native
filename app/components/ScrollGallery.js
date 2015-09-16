var React = require('react-native');
var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

var ScrollGallery = React.createClass({
	render: function() {
		return (
			<ScrollView
        style={styles.scrollbar}
        horizontal={true}
        scrollEventThrottle={200}>
        <Text>Hello</Text>
       </ScrollView>
		);
	}
});

var styles = StyleSheet.create({
  scrollbar: {
    flex: 0.4,
  },
});

module.exports = ScrollGallery;
