/** Import React **/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/** Import UI-KITTEN **/
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import theme from './src/defintions/custom-theme.json';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';

/** Import page **/
import NavigatorApplication from "./src/navigations/NavigatorApplication";

/** Redux **/
import {Provider} from "react-redux";
import {Persistor,Storage} from "./src/reduxStore/config";
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
      <>
        <IconRegistry icons={[EvaIconsPack]} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <Provider store={Storage} >
                <PersistGate loading={null} persistor={Persistor}>
                    <NavigatorApplication/>
                    <StatusBar style="auto" />
                </PersistGate>
            </Provider>
        </ApplicationProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
