import React from 'react';
import { 
  Button, 
  View, 
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableHighlight
} 
from 'react-native';

const  handleSubmit = () => {
  addItem(name);
  Alert.alert('L\'inscription reussi');
};

export default function Home ({navigation}) {
  const [name, onChangeText] = React.useState('');
  const  handleSubmit = () => {
    addItem(name);
    Alert.alert('Connexion reussi');
  };
    return (

  <View style={styles.main}>
          <ScrollView>

            {/* <Image  style={styles.Images} source={require('../assets/login.png')}> */}
        {/* </Image> */}
        <Text style={styles.titleSt}>Email</Text>
        <TextInput style={styles.itemInput} placeholder="Votre email.." onChangeText={text => onChangeText(text)} />
        <Text style={styles.title}>Mot de passe</Text>
        <TextInput style={styles.itemInput} placeholder="Votre Mot de passe.." onChangeText={text => onChangeText(text)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableHighlight>

        {/* lien entre les autre pages  */}
        <Button
          title="Inscription"
          onPress={() => navigation.navigate('Inscription')}/>
        <Button
          title="Mot de passe oublie"
          color="green"
          onPress={() => navigation.navigate('List')}/>
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
      // backgroundColor: '#d8d8fe',
      marginTop: 100,
    },
    title: {
      // marginBottom: 20,
      margin: 10,
      fontSize: 20,
      textAlign: 'center',
      marginRight: 150,

    },
    titleSt: {
      // marginBottom: 20,
      margin:10,
      fontSize: 20,
      textAlign: 'center',
      marginRight: 230,

    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 20,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 30,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center',
      borderRadius: 100,

    },
    button: {
      height: 45,
      width :110,
      // flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      // borderWidth: 1,
      borderRadius: 20,
      marginLeft: 110,
      // marginBottom: 10,
      marginTop: 10,
      // alignSelf: 'stretch',
      justifyContent: 'center',
      textAlign: 'center',
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