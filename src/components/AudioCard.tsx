import { Howl, Howler } from "howler";
import { pause, play } from "ionicons/icons";
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

const AudioCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const sound = new Howl({
  //   src: [require("../audio/Test_Opener.mp3")],
  //   html5: true,
  // });
  // function playSound() {
  //   Howler.volume(1);
  //   sound.play();
  //   setIsPlaying(true);
  // }
  // function pauseSound() {
  //   sound.pause();
  //   setIsPlaying(false);
  // }

  return (
    <>
     <ReactHowler
        src={[require("../audio/Test_Opener.mp3")]}
        playing={isPlaying}
      />
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
                setIsPlaying(true)
              }}
            />
          )}
          {isPlaying && (
            <IonIcon
              icon={pause}
              onClick={() => {
               setIsPlaying(false)
              }}
            />
          )}
        </IonItem>
      </IonCard>
    </>
  );
};

export default AudioCard;
