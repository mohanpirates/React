import React from 'react';
import { Modal, View,Text, Button, Image, StyleSheet } from 'react-native';

const placeDetail = (props) =>{

     let modalContent = null;

     if(props.selectedPlace){
        
        modalContent = (
            <View>
            <Image source={props.selectedPlace.img} style={styles.placeImg}  />
            <Text >{props.selectedPlace.value}</Text></View>
        );
     }

    return(
    <Modal onRequestClose={() => null} visible={props.selectedPlace != null} animationType="slide"> 
        <View style={styles.modalContainer}>
           {modalContent}
        </View>
        <View>
            <Button title="Delete" onPress={props.onItemDeleted}></Button>
            <Button title="Close" onPress={props.onModalClosed} ></Button>
        </View>
    </Modal>
    );

};

const styles = StyleSheet.create({

modalContainer:{
    margin:22
},
placeImg:{
 width:"100%",
 height:200   
}

});


export default placeDetail;