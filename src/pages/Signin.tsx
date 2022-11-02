import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import {AppContext} from '../context/AppContext'

const Signin: React.FC = () => {
 
const { setUser} = useContext<any>(AppContext)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='center'>Signin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton shape="round" className="center" fill="outline" onClick={()=>{setUser("mahmoud")}}> Sign In </IonButton>
        <IonImg src={require("../images/islamic-geometric-pattern.jpeg")} ></IonImg>
        <IonButton shape="round" className="center" fill="outline">Create Account </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Signin;
