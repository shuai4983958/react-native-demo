import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as homeActions from '../../action/home';

type Props = {};
class NextPage extends Component<Props> {
  // static navigatorStyle = {
  //   tabBarHidden: true
  // };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  }
  render() {
    console.log('render-count', this.state.count)
    return (
      <View style={styles.container}>
        <Text style={styles.btnText}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addBtn: {
    backgroundColor: '#08cb6a',
    marginVertical: 20,
    width: 200,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    fontSize: 18,
  },
  commonText: {
    fontSize: 18
  }
});


export default NextPage;
