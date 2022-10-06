import { Howl, Howler } from "howler";
import { pause, play, playCircle } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "./css/AudioCard.css";
import { useEffect, useRef, useState } from "react";
import React from "react";

const AudioCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [require("../audio/Test_Opener.mp3")],
    html5: true,
  });

  return (
    <>
      <IonCard>
        <IonItem>
          <img
            src={require("../images/this-is-islam.jpg")}
            alt="this is islam"
          />
          <IonCardHeader>
            <IonCardSubtitle>
              Abu Iyaad Amjad bin Muhammad Rafiq
            </IonCardSubtitle>
            <IonCardTitle>This Is Islam</IonCardTitle>
          </IonCardHeader>

          {!isPlaying && (
            <IonIcon
              icon={play}
              onClick={() => {
                setIsPlaying(true);
              }}
            />
          )}
          {isPlaying && (
            <IonIcon
              icon={pause}
              onClick={() => {
                setIsPlaying(false);
              }}
            />
          )}
        </IonItem>
      </IonCard>
    </>
  );
};

export default AudioCard;
