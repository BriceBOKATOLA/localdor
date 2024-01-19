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
        <Ionicons
              name="notifications"
              color={searchText.length > 0 ? '#378' : '#000'}
              size={18}
              style={styles.InputAlert}
            />
        <Text style={styles.textStyle}>Appartment 35 m²
        </Text>
        
       
        <ImageBackground 
          style={styles.Images}
          source={require('../assets/acts.jpg')}
          resizeMode='cover'
        >
              <Ionicons
              name="heart-outline"
              color={searchText.length > 0 ? '#378' : '#000'}
              style={styles.Inputimage}
            />

        </ImageBackground>
                <Text style={styles.montant}>733€</Text>
                <Text style={styles.ville}>Paris, France</Text>
                <Text style={styles.Avis}>15 Avis</Text>
        {/* Annonce 2  */}
        <Text style={styles.textStyle}>Appartment 35 m²
        </Text>
        
        <ImageBackground 
          style={styles.Images}
          source={require('../assets/acts.jpg')} 
        >
              <Ionicons
              name="heart-outline"
              color={searchText.length > 0 ? '#378' : '#000'}
              style={styles.Inputimage}
            />

        </ImageBackground>
                <Text style={styles.montant}>733€</Text>
                <Text style={styles.ville}>Paris, France</Text>
                <Text style={styles.Avis}>15 Avis</Text>

                {/* Annonce 3  */}
        <Text style={styles.textStyle}>Appartment 35 m²
        </Text>
        
        <ImageBackground 
          style={styles.Images}
          source={require('../assets/acts.jpg')} 
        >
              <Ionicons
              name="heart-outline"
              color={searchText.length > 0 ? '#378' : '#000'}
              style={styles.Inputimage}
            />

        </ImageBackground>
                <Text style={styles.montant}>733€</Text>
                <Text style={styles.ville}>Paris, France</Text>
                <Text style={styles.Avis}>15 Avis</Text>
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
    borderRadius : 30,
    width: 230,
    height: 50,
    

  },
  textStyle: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    // marginTop: 21,
    marginLeft:20,
    marginTop: 51,
  },
  Images: {
    width: 370,
    height: 230,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  montant: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 1,
    marginLeft: 300,
    color: 'orange' ,

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
  InputAlert: {
    flex: 1,
    fontSize: 25,
    marginLeft: 330,
    marginTop: -37,
    // borderWidth : 1,
    // borderRadius : 8,
    // alignSelf:"stretch",
    // textAlignVertical: "top",

  },
  Inputimage: {
    flex: 1,
    fontSize: 30,
    marginLeft: 330,
    marginTop: 7,
    color: 'white' ,
    // borderWidth : 1,
    // borderRadius : 8,
    // alignSelf:"stretch",
    // textAlignVertical: "top",

  },
  ville: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
    marginTop: -23,
   

  },
  Avis: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 1,
   

  },

})

// import React, { Component } from 'react';
// import { View, Text, FlatList, TextInput, Image, ListItem } from 'react-native';

// class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       value: '',
//     };

//     this.arrayNew = [
//       { name: 'Paris' },
//       { name: 'Le havre' },
//       { name: 'Caen' },
//       { name: 'Feacm' },
//       { name: 'Cherbourg' },
//       { name: 'Pau' },
//       { name: 'Nante' },
//       { name: 'Brad' },
//       { name: 'Samual' },
//       { name: 'Omur' },
//       { name: 'Ower' },
//       { name: 'Awery' },
//       { name: 'Ann' },
//       { name: 'Jhone' },
//       { name: 'z' },
//       { name: 'bb' },
//       { name: 'cc' },
//       { name: 'd' },
//       { name: 'e' },
//       { name: 'f' },
//       { name: 'g' },
//       { name: 'h' },
//       { name: 'i' },
//       { name: 'j' },
//       { name: 'k' },
//       { name: 'React' },
//       { name: 'React native' },
//       { name: 'react navigations' },
//     ];
//   }

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: '100%',
//           backgroundColor: '#CED0CE',
//         }}
//       />
//     );
//   };

//   searchItems = text => {
//     let newData = this.arrayNew.filter(item => {
//       const itemData = `${item.name.toUpperCase()}`;
//       const textData = text.toUpperCase();
//     if(text.length >0 ){
//       return itemData.indexOf(textData) > -1;
//     }
//     });
//     this.setState({
//       data: newData,
//       value: text,
//     });
//   };

//   renderHeader = () => {
//     return (
//       <TextInput
//         style={{ height: 60, borderColor: '#000', borderWidth: 1, borderRadius: 200 / 2,
//       }}
//         placeholder="   Recherche..."
//         onChangeText={text => this.searchItems(text)}
//         value={this.state.value}
//       />
//     );
//   };

//   renderimage= () => {
//     return (
//       <View >
//    <Image source={require('../assets/acts.jpg')}> </Image>

//          </View >
//     );
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           padding: 15,
//           width: '70%',
//           // alignSelf: 'center',
//           // justifyContent: 'center',
//         }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//             <Text style={{ padding: 10 }}>{item.name} </Text>
//           )}
//           keyExtractor={item => item.name}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListimageComponent={this.renderimage}
//         />
//       </View>
//     );
//   }
// }

// export default Home;
