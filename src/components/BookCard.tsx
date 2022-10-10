import { bookmarkOutline, bookmark } from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import React from "react";
import '../index.css';

const BookCard: React.FC = () => {
  return (
    <>
      <IonCard >
        <IonCardHeader>
        <img className="library-img center" src={require("../images/this-is-islam.jpg")} alt="this is islam" />
        </IonCardHeader>
        <IonCardHeader>
          <IonCardSubtitle>Abu Iyaad Amjad bin Muhammad Rafiq</IonCardSubtitle>
          <IonCardTitle>This Is Islam</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          A brief guide to Islam's foundations pillars and obligations, it
          morals and ethics, its position towards extremism and terrorism, and
          the status of women in Islam.
        </IonCardContent>
        <IonCardContent>
          <IonButton shape="round" className="center" fill="outline">  <IonIcon slot="end" icon={bookmarkOutline}></IonIcon>Add To My Books</IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default BookCard;
