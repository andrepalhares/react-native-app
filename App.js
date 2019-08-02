import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
//import placeImage from './src/assets/cd.png';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          placeName: placeName,
          image: {
            uri: "https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop"
          }
        })
      };
    });
  };

  placeDeleteHandler = (index) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== index;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Something has changed</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
        places={this.state.places}
        onItemDeleted={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#DC143C",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});