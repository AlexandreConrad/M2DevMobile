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
    //console.log(dataAPI);
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

export default ObjectListItems;
/**
<Card>
    <Text>{dataAPI.name}</Text>
    <Text>{dataAPI.known_for_department}</Text>
</Card>**/

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightCard: {
        marginLeft: 10,
    },
    allCard : {
        display: "flex",
        backgroundColor:"#eee",
    },

});