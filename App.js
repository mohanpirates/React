import React from 'react';
import { StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInputs/placeInput';
import PlaceList from './src/components/PlaceList/placelist';
import PlaceDetail from './src/components/PlaceDetail/placedetail';

export default class App extends React.Component {

  state={
   
    places: [],
    selectedPlace:null
  }

     selectItemHandler = key =>{

           this.setState(prevState=>{
             return {
               selectedPlace: prevState.places.find(place=>{
                 return place.key === key;
               })
             }
           });      


       
     }

     placeDeletedHandler = ()=>{
             this.setState(prev => {
        return {
          places: prev.places.filter(place=>{
            return place.key !== prev.selectedPlace.key;
          }),
          selectedPlace:null
        }
      });
     }

     modalClosedHandler = ()=>{
       this.setState({
         selectedPlace:null
       });
     }

    placeAddedHandler = placeName =>{

       this.setState(prevStates => {

         return {
           
          places: prevStates.places.concat({key:Math.random().toString(),
            value:placeName,
            img:{
              uri:"http://www.gstatic.com/webp/gallery/1.jpg"
            }
          })

         };

       });

    }

  render() {

    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
       <PlaceInput onPlaceAdded={this.placeAddedHandler} />
       <PlaceList place={this.state.places} onItemSelected={this.selectItemHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
