import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    const resp = await fetch("https://facebook.github.io/react-native/movies.json")
    const respJson = await resp.json()
    //console.warn(respJson);
    this.setState({data:respJson.movies})
  }
  render=() =>
    //return (
      <View>
        <Text style={styles.headerText}>API Call</Text>
        <FlatList 
        data={this.state.data}
        renderItem={({item}) => 
    <Text style={styles.item}>{item.title},{item.releaseYear}</Text>}
        />
      </View>
    // )
  
}

export default App;

const styles = StyleSheet.create({
  item: {
    fontSize: 35, 
    backgroundColor: 'skyblue', 
    margin: 10
  },
  headerText: {
    fontSize: 70
  }
})