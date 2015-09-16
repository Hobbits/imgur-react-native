var React = require('react-native');
var api = require('../utils/api');
var {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
} = React;

var Post = React.createClass({
	render: function() {
    var uri = this.props.image.link;
    var dimensions = api.getDimensions(this.props.image);
		return (
      <View style={styles.post}>
        <Text style={styles.headline}>{this.props.image.title}</Text>
  			<ScrollView style={styles.scroll} contentContainerStyle={dimensions}>
          <Image
  					style={styles.image}
  					source={{uri: uri}}>
          </Image>
  			</ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{'Views: ' + this.props.image.views}</Text>
          <Text style={styles.info}>{'Points: ' + this.props.image.points}</Text>
        </View>
      </View>
		);
	}
});

var styles = StyleSheet.create({
  post: {
    flex: 1,
    marginTop: 15,
  },
  scroll: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15,
    color: 'white',
  }
});

module.exports = Post;
