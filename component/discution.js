
import { StyleSheet, Text, View,ScrollView,Image,Button,SafeAreaView,Alert, ImageBackground,TouchableHighlight,StatusBar,TextInput} from 'react-native';
import React from 'react';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    me:{
      gap:10,
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:29,
      backgroundColor:'#FFFFFF',
      fontSize:15,
    },
    meTwo:{
      gap:10,
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:12,
      backgroundColor:'#FFFFFF',
      fontSize:15,
    },
    other:{
      gap:10,
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:29,
      backgroundColor:'#FF7400',
      fontSize:15,
    },
  });

  return (
    <View style={{flex:1,backgroundColor:'#D9D9D9'}}>
    <StatusBar/>
      <ScrollView>
          <View>
            
            <View style={{ flexDirection:"row",alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderBottomColor :'#FF7400'}}>
              <Image source={require('./assets/iconBack.png')}
                  style={{
                    width: 52, 
                    height: 52,
                    marginVerticals:20,
                    marginRight:40,  
                  }}/>
              <Image source={require('./assets/Usericon.png')}
                  style={{
                    width: 52, 
                    height: 52,
                    marginRight:10, 
                  }}/>
              <View >
                <Text >Pierre Dupain</Text>
                <View style={{ flexDirection:"row",justifyContent: 'center',alignItems: 'center'}}>
                  <Image
                  style={{
                    width: 8, 
                    height: 8,}}
                  source={require('./assets/onligne.png')}/>
                  <Text>En ligne</Text>
                </View>
              </View>
              <Image source={require('./assets/iconNav.png')}
                  style={{
                    width: 52, 
                    height: 52,
                    marginVertical:20,
                    marginLeft:40, 
                  }}/>
            </View>


            <View style={{justifyContent: 'center',alignItems: 'center',marginVertical:10}}>
                  <Text>mer 12:14</Text>
            </View>

            <View style={{ flexDirection:"row"}}>
              <Image source={require('./assets/Usericon.png')}
              style={{
                width: 34, 
                height: 34,
                marginRight:10, 
              }}/>
              <Text style={styles.me}>Bonjour</Text>
            </View>

            <View style={{justifyContent: 'center',alignItems: 'center',marginVertical:10}}>
                  <Text>mer 12:21</Text>
            </View>

            <View style={{ flexDirection:"row-reverse"}}>
              <Image source={require('./assets/Usericon.png')}
              style={{
                width: 34, 
                height: 34,
                marginLeft:10, 
              }}/>
              <Text style={styles.other}>Bonjour</Text>
            </View>

            <View style={{justifyContent: 'center',alignItems: 'center',marginVertical:10}}>
                  <Text>mer 12:48</Text>
            </View>

            <View style={{ flexDirection:"row"}}>
              <Image source={require('./assets/Usericon.png')}
              style={{
                width: 34, 
                height: 34,
                marginRight:10, 
              }}/>
              <Text style={styles.me}>Comment allez-vous ?</Text>
            </View>
            <View style={{marginLeft:45,marginTop:5,width:150}}>
              <Text style={styles.meTwo} >Je serais intéressé par ce bien pouvez-vous me donner plus d’infos ?</Text>
            </View>

            <View style={{justifyContent: 'center',alignItems: 'center',marginVertical:10}}>
                  <Text>mer 12:48</Text>
            </View>

            <View style={{ flexDirection:"row-reverse"}}>
              <Image source={require('./assets/Usericon.png')}
              style={{
                width: 34, 
                height: 34,
                marginLeft:10, 
              }}/>
              <Text style={styles.other}>Oui bien sûr pas de soucis</Text>
            </View>
            <View style={{ flexDirection:"row-reverse",marginLeft:45,marginTop:5}}>
              <View style={styles.me}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Image source={require('./assets/iconDoc.png')}
                  style={{
                    width: 58, 
                    height: 58,
                    marginLeft:10, 
                  }}/>
                  <Text>info.pdf</Text>
                </View>
              </View>
            </View>

            <View style={{backgroundColor:'#FFFFFF',
            borderRadius:58,
            gap:11,
            boder:2,
            flexDirection:"row",
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical:15,
            marginTop:180,

            }}>
              <Image source={require('./assets/iconPlus.png')}
              style={{
                width:38,
                height:38,
                margin:5,
              }}/>
              <TextInput style={{width:280,}} placeholder='Ecrire texte' placeholderTextColor={'#FF7400'}>  </TextInput>
              <Image source={require('./assets/iconSend.png')}
              style={{
                width:24,
                height:24,
                margin:5,
              }}/>
            </View>


          </View>
      </ScrollView>
    </View>
  );
};
