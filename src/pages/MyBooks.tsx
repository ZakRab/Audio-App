import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/MyBooks.css';

const MyBooks: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Audio Books</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Audio Books</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="My Audio Books page" />
      </IonContent>
    </IonPage>
  );
};

export default MyBooks;
