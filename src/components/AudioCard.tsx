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
import ReactHowler from 'react-howler'
import "./css/AudioCard.css";
import { useState } from "react";
import React from "react";

const AudioCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [require("../audio/Test_Opener.mp3")],
    html5: true,
  });
  function playSound() {
    Howler.volume(1);
     sound.play();
    setIsPlaying(true);
  }

  function pauseSound() {
    sound.pause();
    setIsPlaying(false);
  }
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
                playSound()
              }}
            />
          )}
          {isPlaying && (
            <IonIcon
              icon={pause}
              onClick={() => {
                pauseSound()
              }}
            />
            
          )}
        </IonItem>
      </IonCard>
    </>
  );
};

export default AudioCard;
