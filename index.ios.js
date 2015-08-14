/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var MOCKED_MOVIES_DATA = [
  {title:'Title', year:'2015', posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
];

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>Hello World !!</Text>
        <Image
          style={styles.thumbnail}
          source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
