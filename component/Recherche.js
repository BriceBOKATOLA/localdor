import React from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
  const [searchText, setSearchText] = React.useState('')
  const searchWine = (search) => {}
  const resetSearchWine = (search) => {
    setSearchText('')
  }
  return (
    <SafeAreaView style={styles.scriptcontainer}>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              searchWine(searchText)
            }}
          >
            <Ionicons
              name="search"
              color={searchText.length > 0 ? '#34788' : '#000'}
              size={18}
              style={styles.InputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Recherche..."
            placeholderTextColor={'#000'}
            value={searchText}
            style={styles.TextInputContainer}
            onChangeText={(text) => {
              setSearchText(text)
              searchWine(text)
            }}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchWine()
              }}
            >
              <Ionicons
                name="close"
                color={'#000'}
                size={16}
                style={styles.InputIcon}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}

          {/* text   */}

          {/* text /nom et /prenom  */}
           
           {/* Annonce  */}
        </View>
        
        {/* Mettre une image  */}
        <ImageBackground
          style={styles.Images}
          source={require('../assets/act.jpg')}
          resizeMode='cover'
        ><Text style={styles.textPrix}>Prix
        </Text>
        <Text style={styles.textmontant}>300€ - 1300€</Text>

        </ImageBackground>
        <Text style={styles.textStyle}>Nombre de chambre</Text>


        <Text style={styles.imptStyle}>0</Text>
        <Text style={styles.imptStyle}>1</Text>

        <Text style={styles.textStyle}>Surface</Text>


        <Text style={styles.recherche}>
        <Ionicons
              name="search"
              color={searchText.length > 0 ? '#34788' : '#000'}
              size={18}
              style={styles.InputIcon}
            />
            Recherche
        
        </Text>


        


        

      
      </ScrollView>
    </SafeAreaView>
  )
}

// styles

const styles = StyleSheet.create({
  scriptcontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent: 'center',
    marginLeft: 20,
    borderWidth : 1,
    borderRadius : 9,
    width: 347,
    height: 50,
    

  },
 
  TextInputContainer: {
    flex: 1,
    fontSize: 20,
    marginLeft: 13,
  },

  InputIcon: {
    flex: 1,
    fontSize: 20,
    marginLeft: 13,
    marginTop: 12,
    // borderWidth : 1,
    // borderRadius : 8,
    // alignSelf:"stretch",
    // textAlignVertical: "top",

  },
  textStyle: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:20,
  },
  textPrix: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:20,
    // margin: 7,
  },
  textmontant: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 59,
    marginTop: -19,
    color: 'orange',
  },
  recherche: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 89,
    marginTop: 230,
    height: 50,
    width: 220,
    backgroundColor:'orange' ,
    borderWidth : 1,
    borderRadius : 7,
  },
  Images: {
    width: 360,
    height: 120,
    margin: 14,
    marginTop:40,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imptStyle: {
    // grid :'3f',
    // color:'red',
    // borderWidth : 1,
    // borderRadius : 9,
    // height:20,
    // width: 40,
    // marginVertical: 3,
    // margin: 20,
//   alignSelf:'center'
  }


})
