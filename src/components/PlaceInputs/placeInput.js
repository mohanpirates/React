import React,{Component} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

class placeInput extends Component{

    state={
        changeName:''
        }
    
        changeNameHandler = vals =>{
         
           this.setState({
                  changeName:vals
               });
    
        }

        submitHandler = () =>{
      
            if(this.state.changeName.trim() === ""){
                return;
            }
       
              this.props.onPlaceAdded(this.state.changeName);
          
     
         }

render(){
  return(
    <View style={styles.inputContainer}>
         
    <TextInput style={styles.placeInput} placeholder="Enter some text"  value={this.state.changeName} onChangeText={this.changeNameHandler} />
     <Button style={styles.placeButton} onPress={()=>this.submitHandler()}  title="Click me"/>
      </View>
  );
}
}

const styles = StyleSheet.create({

    inputContainer:{
           flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center"
        
      },
      placeInput:{
        width:"70%"
      },
      placeButton:{
        width:"30%"
      },

});

export default placeInput;