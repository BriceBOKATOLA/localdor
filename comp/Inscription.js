import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

// import database from '@react-native-firebase/database';


let addItem = item => {
  database().ref('/items').push({
    name: item
  });
};

export default function AddItem (){
 const [name, onChangeText] = React.useState('');


const  handleSubmit = () => {
    addItem(name);
    Alert.alert('L\'inscription reussi');
  };
    return (
      <View style={styles.main}>
        <ScrollView>
           {/* <Image  style={styles.Images} source={require('../assets/inscipt.png')}>
        </Image> */}
        <Text style={styles.title}>Nom</Text>
        <TextInput style={styles.itemInput} placeholder="Votre Nom.." onChangeText={text => onChangeText(text)} />
        <Text style={styles.title}>Prenom</Text>
        <TextInput style={styles.itemInput} placeholder="Votre Prenom.." onChangeText={text => onChangeText(text)} />
        <Text style={styles.titleSt}>Email</Text>
        <TextInput style={styles.itemInput} placeholder="Votre Email.." onChangeText={text => onChangeText(text)} />
        <Text style={styles.titleSty}>Mot de passe</Text>
        <TextInput style={styles.itemInput} placeholder="Votre Mot de passe.." onChangeText={text => onChangeText(text)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableHighlight>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#b2b2fd',
    marginTop: -20,

  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    marginRight: 200,
  },
  titleSty: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    marginRight: 150,
  },
  titleSt: {
    marginBottom: 20,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginRight: 230,

  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  Images: {
    flexWrap: 'wrap',      
    width: 150, 
    height: 150, 
    borderRadius: 200 / 2,
    marginLeft: 85,
    margin: 20,

  
  },
});