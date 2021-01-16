/** Import React **/
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text} from 'react-native';

/** UI Kitten **/
import {Layout, Button, List} from "@ui-kitten/components";

/** Import de Redux **/
import {connect} from "react-redux";

/** Import helpers favoris **/
import utils from "../utils/utils";
import {getCreditsByID, getMostPopular} from "../Api/TheMovieDb";
import renderCredits from "../components/renderCredits";

const PeopleDetailsPage = ({navigation,route,favObjects,dispatch}) => {

    /** Fonction qui mets à jour la liste au début de la page **/
    useEffect(() => {
        (async () => {
            await getCredits();
        })();
    }, [favObjects]);

    /** Constantes **/
    const [credits , setCredits] = useState([]);

    const displaySavePeople = () => {
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

    /** Récupération de la liste des crédits de la personne **/
    const getCredits = async() => {
        await setCredits([]);
        let response = await getCreditsByID(route.params.dataAPI.id);
        await setCredits(response.data.cast);
        console.log(response.data);
    }

    return (
        <Layout style={styles.container}>
            <Text> Nom = {route.params.dataAPI.id}</Text>
            <Text> Id = {route.params.dataAPI.name}</Text>
            <Text> Departement = {route.params.dataAPI.known_for_department}</Text>
            <Text> Birth = {route.params.dataAPI.birthday}</Text>
            <Text> Death = {route.params.dataAPI.deathday}</Text>
            <Text> Biographie = {route.params.dataAPI.biography}</Text>
            <Layout>{displaySavePeople()}</Layout>
            <List
                data={credits}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCredits}/>
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(PeopleDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


