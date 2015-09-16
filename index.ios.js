/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Loading = require('./app/components/Loading');
var Post = require('./app/components/Post');
var ScrollGallery = require('./app/components/ScrollGallery');
var api = require('./app/utils/api');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var Imgur = React.createClass({
  selectImage: function(image) {
    this.setState({
      image: image,
    })
  },
  loadGallery: function() {
    this.setState({
      count: this.state.count+10
    })
  },
  getInitialState: function() {
    return {
      image: {},
      gallery: [],
      loaded: false,
      count: 10,
    };
  },
  componentDidMount: function() {
    api.getGallery().then(function(res) {
      if (res.success) {
        var gallery = res.data.filter(function(post) {
          return !post.is_album && !post.animated;
        })
        this.setState({
          image: gallery[0],
          gallery: gallery,
          loaded: true,
        });
      }
    }.bind(this))
  },
  render: function() {
    if (!this.state.loaded) {
      return (<Loading />);
    }
    var gallery = this.state.gallery.slice(0, this.state.count);
    return (
      <View style={styles.container}>
        <Post image={this.state.image}/>
        <ScrollGallery 
          gallery={gallery} 
          selectImage={this.selectImage}
          loadGallery={this.loadGallery} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
  },
});

AppRegistry.registerComponent('Imgur', () => Imgur);
