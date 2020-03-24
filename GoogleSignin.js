import { Component } from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,  
} from '@react-native-community/google-signin';

GoogleSignin.configure({
  scopes: [],
	webClientId: '798194073310-46u2j7i62dopv0l5jffmb7nubn0stmeu.apps.googleusercontent.com',
	offlineAccess: true,
	loginHint: '',
	hostedDomain: '',
	loginHint: '',
	forceCodeForRefreshToken: true,
});


export default class GoogleLogin extends Component {
    // Somewhere in your code
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      console.error(error)

    }
  };
  /*Cette méthode peut être utilisée pour savoir si un utilisateur est actuellement connecté.
   Elle renvoie une promesse qui se résout avec une valeur booléenne (qu'elle ne rejette jamais).*/
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };
  //On récupère les infos liées à l'utilisateur lorsqu'il se connecte à l'app.
  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };
  //Supprime la session utilisateur de l'appareil.
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={this._signIn}
      disabled={this.state.isSigninInProgress} />
  }
}
