import { Howl, Howler } from "howler";
import { pause, play } from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
} from "@ionic/react";
import "./css/AudioCard.css";
import { useEffect, useMemo, useRef, useState } from "react";
import React from "react";

const AudioCard: React.FC = () => {
  const audiobook = {
    title: "This Is Islam",
    src: "../images/this-is-islam",
    audio: "../audio/Test_Opener.mp3",
    narrator: "Mahmoud Othman",
    author: "Abu Iyaad Amjad bin Muhammad Rafiq",
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useMemo(
    () =>
      new Howl({
        src: [require("../audio/Test_Opener.mp3")],
        html5: true,
        volume: 1,
      }),
    []
  );
  const [soundId, setSoundId] = useState<number | undefined>(); // sound.play returns an id and begins to play the sound

  // listeners for testing
  useEffect(() => {
    sound.on(
      "play",
      () => {
        console.log("playing");
      },
      soundId
    );
    sound.on(
      "pause",
      () => {
        console.log("paused");
      },
      soundId
    );
    sound.on(
      "stop",
      () => {
        console.log("stopped");
      },
      soundId
    );
  }, []);

  return (
    <>
      <IonCard>
        <IonItem>
          <img
          className="sqr-img"
            src={require("../images/this-is-islam.jpg")}
            alt="this is islam"
          />
          <IonCardHeader>
            <IonCardSubtitle>
              {audiobook.author}
            </IonCardSubtitle>
            <IonCardTitle>{audiobook.title}</IonCardTitle>
          </IonCardHeader>

          {!isPlaying && (
          <IonIcon
            icon={play}
            onClick={() => {
              if (isPlaying) return;
              setSoundId(sound.play(soundId));
              setIsPlaying(true);
            }}
          />
          )} 
          {isPlaying && (
          <IonIcon
            icon={pause}
            onClick={() => {
              if (!isPlaying) return;
              sound.pause(soundId);
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