/** Import React **/
import React from 'react';
import { StyleSheet} from 'react-native';
import {TouchableOpacity} from "react-native";
import { Card, Text } from '@ui-kitten/components';

/** Import UI Kitten **/
import {Layout} from "@ui-kitten/components";

/**
 *  Carte apercu de l'acteur
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