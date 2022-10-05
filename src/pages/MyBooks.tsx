import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AudioCard from '../components/AudioCard';

import './css/MyBooks.css';


const MyBooks: React.FC = () => {
  const audiobook = {title:"this is islam", src:"../images/this-is-islam", audio:"../audio/Test_Opener.mp3", narrator:"Mahmoud Othman", Author: "Abu Iyaad Amjad bin Muhammad Rafiq" }
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
        {/* <IonList> */}
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        <AudioCard></AudioCard>
        {/* </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default MyBooks;
