import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import scale from '../../constants/responsive'

export default class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isPicked : false,
    }
  }
  handlePress = () => {
    this.setState({ isPicked: !this.state.isPicked });
  }

  render() {

    return (

            <TouchableOpacity style={[
                styles.tags,
                this.state.isPicked ? { backgroundColor: 'black' } : {},
              ]} onPress={this.handlePress}>
        <Text style={[styles.tagText, this.state.isPicked ? { color: 'white' } : {},]}>{this.props.text}</Text>
    </TouchableOpacity>


    )
  }
}

const styles = StyleSheet.create({
    tagText:{
    color: '#666666',
  },
  tags:{
    backgroundColor: '#F8F8F8',
    padding: scale(10),
    paddingHorizontal: scale(15),
    borderRadius: scale(20),
    width: 'auto',
    alignItems:'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: scale(10)},

})