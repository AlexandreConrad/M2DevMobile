/** Import React **/
import React from 'react';
import { StyleSheet,View} from 'react-native';
import {TouchableOpacity} from "react-native";

/** Import UI Kitten **/
import {Icon, Layout} from "@ui-kitten/components";
import { Card, Text } from '@ui-kitten/components';

/**
 *  Carte apercu de l'acteur
 **/
const ObjectListItems = ({dataAPI,onClick}) => {

    return (
        <TouchableOpacity onPress={() => (onClick(dataAPI))}>
            <Layout style={styles.container}>
                <View style={styles.allCard}>
                    <View style={styles.rightCard}>
                        <Text>{dataAPI.name}</Text>
                        <Text>{dataAPI.known_for_department}</Text>
                    </View>
                </View>
            </Layout>
        </TouchableOpacity>
    );
}
//<Text>{dataAPI.known_for.slice(0,3).map(x => x.original_title).join(", ")}</Text>
export default ObjectListItems;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 10,
        width : '100%',
    },
    rightCard: {
        marginLeft: 10,
    },
    allCard : {
        display: "flex",
        backgroundColor:"#eee",
    },

});