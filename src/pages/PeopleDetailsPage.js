/** Import React **/
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView, ActivityIndicator,View} from 'react-native';

/** UI Kitten **/
import {Layout, Button, List} from "@ui-kitten/components";

/** Import de Redux **/
import {connect} from "react-redux";

/** Import helpers favoris **/
import utils from "../utils/utils";
import {getCreditsByID, getMostPopular, getMostPopularByID} from "../Api/TheMovieDb";
import renderCredits from "../components/renderCredits";

const PeopleDetailsPage = ({navigation,route,favObjects,dispatch}) => {

    /** Fonction qui mets à jour la liste au début de la page **/
    useEffect(() => {
        (async () => {
            await getCreditsAndInformations();
        })();
    }, [favObjects]);

    /** Constantes **/
    const [credits , setCredits] = useState([]);
    const [informationPeople , setInformationPeople] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

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
    const getCreditsAndInformations = async() => {
        await setIsLoading(true);
        await setCredits([]);
        await setInformationPeople([]);
        let response = await getCreditsByID(route.params.dataAPI.id);
        let information = await getMostPopularByID(route.params.dataAPI.id);
        await setCredits(response.data.cast);
        await setInformationPeople(information.data);
        await setIsLoading(false);
    };

    return (
        <Layout style={styles.container}>
            {isLoading ?
                (<ActivityIndicator size="large" color="#0000ff"/>) :
                (<View>
                        <ScrollView>
                            <Text> Nom = {route.params.dataAPI.name}</Text>
                            <Text> Id = {route.params.dataAPI.id}</Text>
                            <Text> Departement = {route.params.dataAPI.known_for_department}</Text>
                            <Text> Birth = {informationPeople.birthday}</Text>
                            <Text> Death = {informationPeople.deathday}</Text>
                            <Text> Biographie = {informationPeople.biography}</Text>
                            <Layout>{displaySavePeople()}</Layout>
                        </ScrollView>
                            <List
                                data={credits}
                                keyExtractor={(item, index) => (Math.floor(Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0')}
                                renderItem={renderCredits}/>
                    </View>)
            }
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


