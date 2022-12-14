import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { searchOutline, libraryOutline, bookmarkOutline } from 'ionicons/icons';
import Library from './pages/Library';
import MyBooks from './pages/MyBooks';
import Search from './pages/Search';
import Signin from './pages/Signin'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import React, {useContext, useState} from 'react'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {AppContext} from './context/AppContext'

setupIonicReact();


const App: React.FC = () => {
const {user} = useContext<any>(AppContext)

return (
  <IonApp>
    <IonReactRouter >
      <IonTabs>
        <IonRouterOutlet>
         <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/mybooks">
            <MyBooks />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
        </IonRouterOutlet>
      {user ? <IonTabBar slot="top">
          <IonTabButton tab="library" href="/library">
            <IonIcon icon={libraryOutline} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>
          <IonTabButton tab="mybooks" href="/mybooks">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>My Books</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar> : <IonTabBar></IonTabBar>}
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

export default App;
