/** Import React **/
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from "react-native";

/** Import UI Kitten **/
import {Layout} from "@ui-kitten/components";

/**
 *  Aperçu de mon objet
 *  Nous pouvons afficher ce qu'on veut
 **/
const ObjectListItems = ({dataAPI,onClick}) => {
    return (
        <TouchableOpacity onPress={() => (onClick(dataAPI))}>
            <Layout style={styles.container}>
                <Text>{dataAPI.name}</Text>
            </Layout>
        </TouchableOpacity>
    );
}

export default ObjectListItems;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


