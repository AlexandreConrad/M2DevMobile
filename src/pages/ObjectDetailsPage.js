/** Import React **/
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {Layout} from "@ui-kitten/components";

const ObjectDetails = ({navigation,route}) => {

    return (
        <Layout style={styles.container}>
            <Text>{route.params.dataAPI.id}</Text>
            <Text>{route.params.dataAPI.name}</Text>
        </Layout>
    );
}

export default ObjectDetails;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


