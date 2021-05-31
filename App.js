/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Dimensions } from 'react-native';
 
import { SliderBox, StatusBar } from "react-native-image-slider-box";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//var bColor = getRandomColor();
//var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';;

//add functionality here to randomize an array of reference strings
//then randomize them and then initialize them below 
var ArtReferences = ['./Art/o4atG1.jpg','./Art/1559255.jpg',
  './Art/wa7v9q.jpg','./Art/Pentwater.jpg'];
  var ShuffledArt = ShuffleArtArray(ArtReferences);
  //var ShuffledReferences
  //App.state.images = ShuffledArt;
 
export default class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      images: [

        //ShuffledArt
        
        //"https://source.unsplash.com/1024x768/?nature",
        //maybe try adding for loop here of refrences above
        
        require('./Art/o4atG1.jpg'),
        require('./Art/1559255.jpg'),
        require('./Art/wa7v9q.jpg'),
        require('./Art/Pentwater.jpg'),
      ],
      ColorHolder : '#379683'
    };
    
  }
  //this doesn't do anything rn
    ChangeColorFunction=()=>
  {
  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  this.setState({
    ColorHolder : ColorCode

  })
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]}>
       <ScrollView>
       <Text style={styles.titleText}>The Art of Tootsie</Text>
       
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={windowHeight - (styles.titleText.height + styles.titleText.marginTop) } //fix this problem
          disableOnPress={true}
          circleLoop={true}
          resizeMode={'contain'}
          resizeMethod={'resize'}
          /*
          resizeMode: Determines how to resize the image when the frame doesn't match the raw image dimensions.
          It can take cover, contain, stretch as values.

          resizeMethod: It can be used to resize the image when the image's dimensions differ from the image view's dimensions.
          It can take auto, resize, scale as values.
          */
          paginationBoxVerticalPadding={20}
          /*onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
            //this.ChangeColorFunction()
          }*/
          
        />
        
        </ScrollView>
      </View>
    );
  }
}

//this creates and returns a randomized array of references
  //i think (untested)
  function ShuffleArtArray(ArtArray) {
    let curId = ArtArray.length;
    while (0 !== curId){
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = ArtArray[curId];
      ArtArray[curId] = ArtArray[randId];
      ArtArray[randId] = tmp;
    }
    //iterates and creates references
    //var RefArray;
    return ArtArray
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: ColorCode
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column"
    

  },
  titleText: {
    flex: .1,
    textAlign: 'center',
    marginTop: 40, //can add this to the total height of the image subtraction
    height: 45,
    fontWeight: "bold",
    fontSize: 30,
    color: '#FFFFFF',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: '#E8A87C'
    
  }
});

//add download button
//check and add for zoom
//add (i) button to open up explanation
//add function to randomize the order


//export default App;
