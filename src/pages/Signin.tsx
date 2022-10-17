import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './css/Signin.css';

const Signin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='center'>Signin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton shape="round" className="center" fill="outline"> Sign In </IonButton>
        <IonImg src={require("../images/islamic-geometric-pattern.jpeg")} ></IonImg>
        <IonButton shape="round" className="center" fill="outline">Create Account </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Signin;
