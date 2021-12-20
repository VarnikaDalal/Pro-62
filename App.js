import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bStatus: 'Present',
      boStatus: 'Present',
      jStaus: 'Present',
    };
  }
  render() {
    return (
      <View>
        <Header />
        <Text style={{ color: 'orange' }}>Billathon</Text>
        <TouchableOpacity style={styles.presentButton}>
          <Text
            onPress={() => {
              this.setState({
                bStatus: 'Present',
              });
            }}>
            Present
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absentButton}>
          <Text
            onPress={() => {
              this.setState({
                bStatus: 'Absent',
              });
            }}>
            Absent
          </Text>
        </TouchableOpacity>
        <Text>{this.state.bStatus}</Text>
        <Text style={{ color: 'orange' }}>Bobason</Text>
        <TouchableOpacity style={styles.presentButton}>
          <Text
            onPress={() => {
              this.setState({
                boStatus: 'Present',
              });
            }}>
            Present
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absentButton}>
          <Text
            onPress={() => {
              this.setState({
                boStatus: 'Absent',
              });
            }}>
            Absent
          </Text>
        </TouchableOpacity>
        <Text>{this.state.boStatus}</Text>
        <Text style={{ color: 'orange' }}>Johnason</Text>
        <TouchableOpacity style={styles.presentButton}>
          <Text
            onPress={() => {
              this.setState({
                jStatus: 'Present',
              });
            }}>
            Present
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absentButton}>
          <Text
            onPress={() => {
              this.setState({
                jStatus: 'Absent',
              });
            }}>
            Absent
          </Text>
        </TouchableOpacity>
        <Text>{this.state.jStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    width: 50,
    borderWidth: 2,
  },
  absentButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    width: 50,
    borderWidth: 2,
  },
});
