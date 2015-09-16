/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Post = require('./app/components/Post');
var ScrollGallery = require('./app/components/ScrollGallery');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var Imgur = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Post />
        <ScrollGallery />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Imgur', () => Imgur);
