import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
//import placeImage from './src/assets/cd.png';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          placeName: placeName,
          image: {
            uri: "https://images.vexels.com/media/users/3/128308/isolated/preview/e3496b3f1110a234cadd70a8eef71076-new-york-city-skyline-by-vexels.png"
          }
        })
      };
    });
  };

  placeSelectedHandler = (index) => {
    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find(place => {
          return place.key === index;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Text>Something has changed</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
        places={this.state.places}
        onItemSelected={this.placeSelectedHandler}
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