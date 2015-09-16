var React = require('react-native');

var {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

class Loading extends Component {
  render() { 
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Loading...</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
  },
  text: {
    color: '#85BF25'
  }
});

module.exports = Loading;