import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, TextInput, AppRegistry } from 'react-native';
import * as Google from 'expo-google-app-auth';

class Hello extends Component {
	render() {
		return (
			<View style={{fontSize: 16}}>
				<Text> Helol{this.props.name}!</Text>
			</View>
		);
	}
}

export default class MyApp extends Component {

	constructor(props) {
		super(props);
		this.state = { text: 'Default text'};
	}

	async googleSignIn() {
		const { type, accessToken, user } = await Google.logInAsync({
			clientId: '798194073310-46u2j7i62dopv0l5jffmb7nubn0stmeu.apps.googleusercontent.com',
		});
		console.log(accessToken)
	}

	render() {
		return (
			// VIEW = BODY (Tout doit être dedans)
			// button = BOUTON (method onPress = action au click)
			// Image = Images (lien ou source)
	    	<View style={styles.container}>
					<Text style={styles.label}>Welcome to the test app!</Text>
					<Hello name="Maxime"/>
		      <Text id="montext" style={{fontSize: 20}}>{this.state.text}</Text>
					<Button
	        title="Press me"
					onPress={this.googleSignIn}
	      />
				<Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://cdn.pixabay.com/photo/2019/08/21/08/33/nose-4420535_960_720.jpg'}}
        />
				<TextInput
					id="test"
	        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({text})}
      	/>
	    </View>
	  );
	}
}

AppRegistry.registerComponent('MyApp', () => UselessTextInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
	  },
	  label: {
	    fontSize: 16,
	    fontWeight: 'normal',
	    marginBottom: 48,
	  },
});
