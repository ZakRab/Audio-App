import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Signin.css';

const Signin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Signin" />
      </IonContent>
    </IonPage>
  );
};

export default Signin;
