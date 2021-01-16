/** Import React **/
import React from 'react';
import { StyleSheet} from 'react-native';
import { Text } from '@ui-kitten/components';

/** Import UI Kitten **/
import {Layout} from "@ui-kitten/components";

/**
 *  Carte apercu de l'acteur
 **/
const renderCredits = (dataAPI) => {
    return (
        <Layout>
            <Text>{dataAPI.item.original_title}</Text>
        </Layout>
    );
}

export default renderCredits;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});