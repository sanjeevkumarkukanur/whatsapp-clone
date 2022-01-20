import '../styles/globals.css'
import { useAuthState  } from "react-firebase-hooks/auth";
import {  db, auth } from '../firebase';
function MyApp({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  return <Component {...pageProps} />
}

export default MyApp
