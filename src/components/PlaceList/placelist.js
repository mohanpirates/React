import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import ListItem from '../ListItems/listItems';

const placelist = (props)=>{

//     const placesOutput = props.place.map((place,i)=>(
        
                //  ));

return(
    
    <FlatList style={styles.listContainer}
    data={props.place}
    renderItem={(info)=>(
<ListItem placeImg={info.item.img} placeName={info.item.value} onItemPressed={()=>{props.onItemSelected(info.item.key)}} />
    )}
    />
     
);
}

const styles = StyleSheet.create({

      
  listContainer:{
    width:"100%"
  }

});

export default placelist;