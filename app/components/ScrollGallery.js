var React = require('react-native');
var Thumbnail = require('./Thumbnail');
var {
  ScrollView,
  StyleSheet,
  Text,
} = React;

var ScrollGallery = React.createClass({
	render: function() {
    var images = this.props.gallery.map(function(image) {
      return <Thumbnail key={image.id} thumbnail={image} selectImage={this.props.selectImage}/>
    }.bind(this));
		return (
			<ScrollView
        ref="scroll"
        style={styles.scrollbar}
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={false}
        horizontal={true}>
        {images}
       </ScrollView>
		);
	}
});

var styles = StyleSheet.create({
  scrollbar: {
    flex: 0.3,
    backgroundColor: '#2B2B2B',
  },
});

module.exports = ScrollGallery;
