
import { StyleSheet, Text, View,ScrollView,Image,Button,SafeAreaView,Alert, ImageBackground,TouchableHighlight,StatusBar} from 'react-native';
import React from 'react';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    text:{
      fontSize:12,
    },
    texttwo:{
      fontSize:18,
    },
    title:{
      fontSize : 32,
      marginVertical: 40,

    },
    titletwo:{
      fontSize:12,
      marginVertical: 10,
    },
  });

  return (
    <View style={{flex:1}}>
    <StatusBar/>
      <ScrollView>
          <View>
    

            <Text style={{fontSize:16,marginTop:80,marginLeft:20}}> Messages</Text> 

            <View style={{ flexDirection: 'row',alignItems: 'center',marginLeft:20,marginVertical:15,}}>
              <ImageBackground
              source={require('./assets/Usericon.png')}
              style={{
                width:52,
                height:52,
                alignItems: 'flex-end',
              }}>
                <Image
                source={require('./assets/onligne.png')}
                style={{
                  width:12,
                  height:12,
                  marginTop:40,
                }}/>
              </ImageBackground>
              <View>
                <Text style={{fontSize:17,}}>Pierre Dupain</Text>
                <Text style={{fontSize:14,}}>Je serais intéressé par ce bien, pou...</Text>
              </View>
              <Text style={{marginTop:35,marginLeft:40,fontSize:12,}}>mer 12:21</Text>
            </View>

            <View style={{ flexDirection: 'row',alignItems: 'center',marginLeft:20,marginVertical:15,}}>
              <ImageBackground
              source={require('./assets/Usericon2.png')}
              style={{
                width:52,
                height:52,
                alignItems: 'flex-end',
              }}>
                <Image
                source={require('./assets/onligne.png')}
                style={{
                  width:12,
                  height:12,
                  marginTop:40,
                }}/>
              </ImageBackground>
              <View>
                <Text style={{fontSize:17,}}>Julie Delaporte</Text>
                <Text style={{fontSize:14,}}>A partagé des photos</Text>
              </View>
              <Text style={{marginTop:35,marginLeft:120,fontSize:12,}}>mer 12:21</Text>
            </View>

            <View style={{ flexDirection: 'row',alignItems: 'center',marginLeft:20,marginVertical:15,}}>
              <ImageBackground
              source={require('./assets/Usericon3.png')}
              style={{
                width:52,
                height:52,
                alignItems: 'flex-end',
              }}>
                <Image
                source={require('./assets/onligne.png')}
                style={{
                  width:12,
                  height:12,
                  marginTop:40,
                }}/>
              </ImageBackground>
              <View>
                <Text style={{fontSize:17,}}>Sophie Paradis</Text>
                <Text style={{fontSize:14,}}>Je serais intéressé par ce bien, pou...</Text>
              </View>
              <Text style={{marginTop:35,marginLeft:40,fontSize:12,}}>mer 12:21</Text>
            </View>

            <View style={{ flexDirection: 'row',alignItems: 'center',marginLeft:20,marginVertical:15,}}>
              <ImageBackground
              source={require('./assets/Usericon4.png')}
              style={{
                width:52,
                height:52,
                alignItems: 'flex-end',
              }}>
                <Image
                source={require('./assets/onligne.png')}
                style={{
                  width:12,
                  height:12,
                  marginTop:40,
                }}/>
              </ImageBackground>
              <View>
                <Text style={{fontSize:17,}}>Paul Barette</Text>
                <Text style={{fontSize:14,}}>A partagé des photos</Text>
              </View>
              <Text style={{marginTop:35,marginLeft:120,fontSize:12,flex:1}}>mer 12:21</Text>
            </View>

            
            

           
          
          </View>
      </ScrollView>
    </View>
  );
};
