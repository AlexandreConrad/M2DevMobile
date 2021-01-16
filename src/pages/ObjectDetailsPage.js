/** Import React **/
import React from 'react';
import { StyleSheet, Text} from 'react-native';

/** UI Kitten **/
import {Layout,Button} from "@ui-kitten/components";

/** Import de Redux **/
import {connect} from "react-redux";

/** Import helpers favoris **/
import utils from "../utils/utils";

const ObjectDetailsPage = ({navigation,route,favObjects,dispatch}) => {

    const displaySaveObject = () => {
        //Fonction pour le switch de boutton
        if (favObjects.findIndex(i => i === route.params.dataAPI.id) !== -1) {
            return (
                <Button
                    title='Retirer des favoris'
                    onPress={() => utils.unsaveObject(route.params.dataAPI.id,dispatch)}>
                    Retirer des favoris
                </Button>
            );
        }
        return (
            <Button
                title='Ajouter aux favoris'
                onPress={() => utils.saveObject(route.params.dataAPI.id,dispatch)}>
                Ajouter aux favoris
            </Button>
        );
    }

    return (
        <Layout style={styles.container}>
            <Text>{route.params.dataAPI.id}</Text>
            <Text>{route.params.dataAPI.name}</Text>
            <Layout>{displaySaveObject()}</Layout>
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(ObjectDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


