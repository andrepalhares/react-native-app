import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View style={styles.listItem}>
                <Text>{props.selectedPlace.key}</Text>
                <Image 
                source={props.selectedPlace.image}
                style={styles.placeImage}
                resizeMode="cover"
                />
                <Text style={styles.placeName}>{props.selectedPlace.placeName}</Text>
            </View>
        );
    }

    return (
        <Modal 
        visible={props.selectedPlace !== null}
        animationType="slide"
        >
            <View>
                {modalContent}
                <View style={styles.modalContainer}>
                    <Button color="red" title="Delete" />
                    <Button color="grey" title="Close" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
        backgroundColor: '#a52a2a'
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#a52a2a",
        flexDirection: "column",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 200,
        width: "100%"
    }
});

export default placeDetail;