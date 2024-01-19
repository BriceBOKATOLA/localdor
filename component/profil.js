
import { StyleSheet, Text, View,ScrollView,Image,Button,SafeAreaView,Alert, ImageBackground,TouchableHighlight,StatusBar} from 'react-native';
import React from 'react';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
  });

  return (
    <View style={{flex:1}}>
    <StatusBar/>
      <ScrollView>
          <View>
            <View></View>
            <View style={{alignItems: 'center',justifyContent: 'center',marginTop:50}}>
              <Image source={require('./assets/Usericon.png')}
              style={{
                height:73,
                width:74,
              }}/>  
              <Text style={{fontSize:16}}>Pierre Dupain </Text>
              <View style={{ flexDirection:'row',

              }}>
                <Text style={{fontSize:14}}>15 avis </Text>

                <Text style={{fontSize:14 }}>4.5 </Text>
                <Image source={require('./assets/icnStart.png')}
                style={{
                  width:18,
                  height:18,
                }}/>
              </View>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,marginTop:20}}>
                <Text style={{fontSize:14,}}>Information personnel</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:218,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Mes documents</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:250,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Mes paiements</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:253,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Déclarer un litige</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:248,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Historique des visites</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:221,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Centre d'aide</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:267,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Mode locataire</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:256,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Invité un amis</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:261,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Politique de confidentialité</Text>
                <Image source={require('./assets/iconFleche.png')}
                style={{
                  width:24,
                  height:24,
                  marginLeft:192,
                }}/>
            </View>

            <View style={{ flexDirection:'row',alignItems: 'center',marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:14,}}>Mode locataire</Text>
                <Image source={require('./assets/switch.png')}
                style={{
                  marginLeft:250,
                }}/>
            </View>

            <View style={{
              flexDirection:'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius:4,
              backgroundColor:'#FF7400',
              marginHorizontal:100,
              marginVertical:50,

              
            }}>
              <Image source={require('./assets/iconCorona.png')}
              style={{
                width:24,
                height:24,
                marginVertical:10,
              }}/>
              <Text style={{fontSize:16,color:'#FFFFFF'}}>Passer Premium</Text>
            </View>
            
           
          
          </View>
      </ScrollView>
    </View>
  );
};
