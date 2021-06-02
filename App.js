/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import { Dimensions, ImageBackground, StatusBar, Button } from 'react-native';
 
import { SliderBox } from "react-native-image-slider-box";
//IMPORTANT ^^^ ABOVE USED TO HAVE STATUSBAR THIS COULD FUCK SHIT UP

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//this is the background image constant
const BGimage =  require('./Art/pagerBackground.jpg');

const ArtistMessage = "After years of creating hidden masterpieces, the artist.";

var ImageIndex = 0; //this holds the image index and is updated on image switch
//use this 

  //This holds the same array as the images, and allows download 
  const IMGArray = ['./Art/IMG_20210531_0004.jpg',
        './Art/IMG_20210531_0005.jpg',
        './Art/IMG_20210531_0006.jpg',
        './Art/IMG_20210531_0007.jpg',
        './Art/IMG_20210531_0009.jpg',
        './Art/IMG_20210531_0010.jpg',
        './Art/IMG_20210531_0011.jpg',
        './Art/IMG_20210531_0012.jpg',
        './Art/IMG_20210531_0013.jpg',
        './Art/IMG_20210531_0014.jpg',
        './Art/IMG_20210531_0015.jpg',
        './Art/IMG_20210531_0016.jpg',
        './Art/IMG_20210531_0017.jpg',
        './Art/IMG_20210531_0018.jpg',
        './Art/IMG_20210531_0019.jpg',
        './Art/IMG_20210531_0020.jpg',
        './Art/IMG_20210531_0021.jpg',
        './Art/IMG_20210531_0023.jpg',
        './Art/IMG_20210531_0024.jpg',
        './Art/IMG_20210531_0025.jpg',
        './Art/IMG_20210531_0026.jpg',
        './Art/IMG_20210531_0027.jpg',
        './Art/IMG_20210531_0028.jpg',
        './Art/IMG_20210531_0029.jpg',
        './Art/IMG_20210531_0030.jpg',
        './Art/IMG_20210531_0031.jpg',
        './Art/IMG_20210531_0032.jpg',
        './Art/IMG_20210531_0033.jpg',
        './Art/IMG_20210601_0002.jpg',
        './Art/IMG_20210601_0003.jpg',
        './Art/SCAN_20210601_0001.jpg',
        './Art/SCAN_20210601_0002.jpg',
        './Art/SCAN_20210601_0003.jpg',
        './Art/SCAN_20210601_0004.jpg',
        './Art/SCAN_20210601_0005.jpg',
        './Art/SCAN_20210601_0006.jpg',
        './Art/SCAN_20210601_0007.jpg',
        './Art/SCAN_20210601_0008.jpg',
        './Art/SCAN_20210601_0009.jpg',
        './Art/SCAN_20210601_0010.jpg',
        './Art/SCAN_20210601_0011.jpg',
        './Art/SCAN_20210601_0012.jpg',
        './Art/SCAN_20210601_0013.jpg',
        './Art/SCAN_20210601_0014.jpg',
        './Art/SCAN_20210601_0015.jpg',
        './Art/SCAN_20210601_0016.jpg',
        './Art/SCAN_20210601_0017.jpg',
        './Art/SCAN_20210601_0018.jpg',
        './Art/SCAN_20210601_0019.jpg',
        './Art/SCAN_20210601_0020.jpg',
        './Art/SCAN_20210601_0021.jpg',
        './Art/SCAN_20210601_0022.jpg',
        './Art/SCAN_20210601_0023.jpg',
        './Art/SCAN_20210601_0024.jpg',
        './Art/SCAN_20210601_0025.jpg',
        './Art/SCAN_20210601_0026.jpg',
        './Art/SCAN_20210601_0027.jpg',
        './Art/SCAN_20210601_0028.jpg',
        './Art/SCAN_20210601_0029.jpg',
        './Art/SCAN_20210601_0030.jpg',
        './Art/SCAN_20210601_0031.jpg',
        './Art/SCAN_20210601_0032.jpg',
        './Art/SCAN_20210601_0033.jpg',
        './Art/SCAN_20210601_0034.jpg',
        './Art/SCAN_20210601_0035.jpg',
        './Art/SCAN_20210601_0036.jpg',
        './Art/SCAN_20210601_0037.jpg',
        './Art/SCAN_20210601_0038.jpg',
        './Art/SCAN_20210601_0039.jpg',
        './Art/SCAN_20210601_0040.jpg',
        './Art/SCAN_20210601_0041.jpg',
        './Art/SCAN_20210601_0042.jpg',
        './Art/SCAN_20210601_0043.jpg',
        './Art/SCAN_20210601_0044.jpg',
        './Art/SCAN_20210601_0045.jpg',
        './Art/SCAN_20210601_0046.jpg',
        './Art/SCAN_20210601_0047.jpg'];

 
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: [

        //IMGArray.
        //WE NEED TO FIND A BETTER WAY TO ADD IMAGES HERE PROGRAMMATICALLY

        require('./Art/IMG_20210531_0004.jpg'),
        require('./Art/IMG_20210531_0005.jpg'),
        require('./Art/IMG_20210531_0006.jpg'),
        require('./Art/IMG_20210531_0007.jpg'),
        require('./Art/IMG_20210531_0009.jpg'),
        require('./Art/IMG_20210531_0010.jpg'),
        require('./Art/IMG_20210531_0011.jpg'),
        require('./Art/IMG_20210531_0012.jpg'),
        require('./Art/IMG_20210531_0013.jpg'),
        require('./Art/IMG_20210531_0014.jpg'),
        require('./Art/IMG_20210531_0015.jpg'),
        require('./Art/IMG_20210531_0016.jpg'),
        require('./Art/IMG_20210531_0017.jpg'),
        require('./Art/IMG_20210531_0018.jpg'),
        require('./Art/IMG_20210531_0019.jpg'),
        require('./Art/IMG_20210531_0020.jpg'),
        require('./Art/IMG_20210531_0021.jpg'),
        require('./Art/IMG_20210531_0023.jpg'),
        require('./Art/IMG_20210531_0024.jpg'),
        require('./Art/IMG_20210531_0025.jpg'),
        require('./Art/IMG_20210531_0026.jpg'),
        require('./Art/IMG_20210531_0027.jpg'),
        require('./Art/IMG_20210531_0028.jpg'),
        require('./Art/IMG_20210531_0029.jpg'),
        require('./Art/IMG_20210531_0030.jpg'),
        require('./Art/IMG_20210531_0031.jpg'),
        require('./Art/IMG_20210531_0032.jpg'),
        require('./Art/IMG_20210531_0033.jpg'),
        require('./Art/IMG_20210601_0002.jpg'),
        require('./Art/IMG_20210601_0003.jpg'),
        require('./Art/SCAN_20210601_0001.jpg'),
        require('./Art/SCAN_20210601_0002.jpg'),
        require('./Art/SCAN_20210601_0003.jpg'),
        require('./Art/SCAN_20210601_0004.jpg'),
        require('./Art/SCAN_20210601_0005.jpg'),
        require('./Art/SCAN_20210601_0006.jpg'),
        require('./Art/SCAN_20210601_0007.jpg'),
        require('./Art/SCAN_20210601_0008.jpg'),
        require('./Art/SCAN_20210601_0009.jpg'),
        require('./Art/SCAN_20210601_0010.jpg'),
        require('./Art/SCAN_20210601_0011.jpg'),
        require('./Art/SCAN_20210601_0012.jpg'),
        require('./Art/SCAN_20210601_0013.jpg'),
        require('./Art/SCAN_20210601_0014.jpg'),
        require('./Art/SCAN_20210601_0015.jpg'),
        require('./Art/SCAN_20210601_0016.jpg'),
        require('./Art/SCAN_20210601_0017.jpg'),
        require('./Art/SCAN_20210601_0018.jpg'),
        require('./Art/SCAN_20210601_0019.jpg'),
        require('./Art/SCAN_20210601_0020.jpg'),
        require('./Art/SCAN_20210601_0021.jpg'),
        require('./Art/SCAN_20210601_0022.jpg'),
        require('./Art/SCAN_20210601_0023.jpg'),
        require('./Art/SCAN_20210601_0024.jpg'),
        require('./Art/SCAN_20210601_0025.jpg'),
        require('./Art/SCAN_20210601_0026.jpg'),
        require('./Art/SCAN_20210601_0027.jpg'),
        require('./Art/SCAN_20210601_0028.jpg'),
        require('./Art/SCAN_20210601_0029.jpg'),
        require('./Art/SCAN_20210601_0030.jpg'),
        require('./Art/SCAN_20210601_0031.jpg'),
        require('./Art/SCAN_20210601_0032.jpg'),
        require('./Art/SCAN_20210601_0033.jpg'),
        require('./Art/SCAN_20210601_0034.jpg'),
        require('./Art/SCAN_20210601_0035.jpg'),
        require('./Art/SCAN_20210601_0036.jpg'),
        require('./Art/SCAN_20210601_0037.jpg'),
        require('./Art/SCAN_20210601_0038.jpg'),
        require('./Art/SCAN_20210601_0039.jpg'),
        require('./Art/SCAN_20210601_0040.jpg'),
        require('./Art/SCAN_20210601_0041.jpg'),
        require('./Art/SCAN_20210601_0042.jpg'),
        require('./Art/SCAN_20210601_0043.jpg'),
        require('./Art/SCAN_20210601_0044.jpg'),
        require('./Art/SCAN_20210601_0045.jpg'),
        require('./Art/SCAN_20210601_0046.jpg'),
        require('./Art/SCAN_20210601_0047.jpg'),

        //require('./'),
        
        //old
        /*require('./Art/o4atG1.jpg'),
        require('./Art/1559255.jpg'),
        require('./Art/wa7v9q.jpg'),
        require('./Art/Pentwater.jpg'),*/
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
      <StatusBar hidden={true} />
      <ImageBackground source={BGimage} style={styles.appStyleforBG}>
       <ScrollView>
       <Text style={styles.titleText}>The Art of Tootsie</Text>
       <View style={styles.spaceBelowText}/>
       <View style={styles.buttonLargeContainer}> 

          <View style={styles.buttonSmallContainer}>
            <Button
            title="The Artist"
            onPress={() => Alert.alert('The Artist' , ArtistMessage)}
            color='white'/>
          </View>
          <View style={styles.spaceBetweenButtons}/>
          <View style={styles.buttonSmallContainer}>
            <Button title="Download Image"
            color='white'/>
          </View>
        <View style={styles.spaceBelowButtons}/>
        </View>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={windowHeight - (styles.titleText.height + styles.titleText.marginTop + 50) } //fix this problem
          //sliderBoxHeight={windowHeight}
          disableOnPress={true}
          flexGrow={1}
          circleLoop={true}
          resizeMode={'contain'}
          resizeMethod={'resize'}
          currentImageEmitter={index => ImageIndex = index}
          dotStyle={{
            width: 0,
            height: 0,
            borderRadius: 0,
            marginHorizontal: 0,
            padding: 0,
            margin: 0
          }}
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
        </ImageBackground>
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
    justifyContent: 'flex-end', //originally center
    alignItems: 'flex-start', //originally center
    flexDirection: "column",
    
  },
  titleText: {
    flex: .1,
    textAlign: 'center',
    marginTop: 40, //can add this to the total height of the image subtraction
    height: 40,
    fontWeight: "bold",
    fontSize: 30,
    color: '#FFFFFF',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: '#E8A87C'
  },
  //this is for the attempt at adding a background image
  appStyleforBG: {
    flex: 1,
    resizeMode: "stretch", //originally 'cover'
    justifyContent: "center"
  },
  buttonLargeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',//used to be center
    //margin:20,
    //padding: 20
  },
  buttonSmallContainer: {
    flex: .5,
    backgroundColor: '#1b8ed1',
    borderWidth: 1,
    borderRadius: 15
  },
  spaceBetweenButtons: {
    width: 20
  },
  spaceBelowText: {
    height: 15
  },
  spaceBelowButtons: {
    height: 10
  }
  
});

//add download button
//check and add for zoom
//add (i) button to open up explanation
//add function to randomize the order


//export default App;
