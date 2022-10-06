import { Howl, Howler } from "howler";
import { pause, play,  } from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
} from "@ionic/react";
import "./css/AudioCard.css";
import { useState } from "react";
import React from "react";


const AudioCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [require("../audio/Test_Opener.mp3")],
    html5: true,
    volume: 1,
  });
  
  const [soundId, setSoundId] = useState(sound.play()) // sound.play returns an id and begins to play the sound
    sound.pause() 

    // listeners for testing
  sound.on("play", ()=>{
    console.log("playing")}, soundId
  )
  sound.on("pause", ()=>{
    console.log("paused")}, soundId
  )
  sound.on("stop", ()=>{
    console.log("stopped")}, soundId
  )

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


          {/* {!isPlaying && ( */}
            <IonIcon
              icon={play}
              onClick={() => {
                sound.play(soundId)
                setIsPlaying(true);
              }}
            />
          {/* )} */}
          {/* {!isPlaying && ( */}
            <IonIcon
              icon={pause}
              onClick={() => {
                sound.pause()
                setIsPlaying(false);
              }}
            />
          {/* )} */}
        </IonItem>
      </IonCard>
    </>
  );
};

export default AudioCard;
