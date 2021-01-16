/** Import React **/
import React, {useEffect, useState} from 'react';
import { StyleSheet,ActivityIndicator,View} from 'react-native';

/** Import UI Kitten et Redux **/
import {Layout, List,Button,Input } from "@ui-kitten/components";
import {connect} from 'react-redux';

/** Call API **/
import ObjectListItemsMostPopular from "../components/ListMostPopular";
import {getMostPopular, getPeoplesByName} from "../Api/TheMovieDb";

/** Import helpers favoris **/
import utils from "../utils/utils";
import Assets from "../defintions/Assets";

const HomePage = ({navigation,favObjects}) => {

    /** Constantes **/
    const [isLoading , setIsLoading] = useState(false);
    const [dataAPI , setDataAPI ] = useState([]);
    const [name, setName] = useState("");

    /** Permet la navigation vers une personne **/
    const navigationOnClick = async(dataAPI) => {
        navigation.navigate("ViewObjectPage", {dataAPI});
    }

    /** Retourne mon composant aperçu d'object **/
    const renderMostPopular = ({item}) => {
        return (<ObjectListItemsMostPopular dataAPI={item} onClick={navigationOnClick}/>);
    }

    /** Fonction qui mets à jour la liste au début de la page et qui fait un call api des most popular**/
    useEffect(() => {
        (async () => {
            await requestTheMovieDB();
        })();
    }, [favObjects]);

    /** Récupération de la liste des personnes en tendance **/
    const requestTheMovieDB = async() => {
        await setIsLoading(true);
        await setDataAPI([]);
        let response = await getMostPopular();
        await setDataAPI(response.data.results);
        await setIsLoading(false);
    }

    const searchByName = async() =>{
        await setIsLoading(true);
        await setDataAPI([]);
        let response = await getPeoplesByName(name);
        await setDataAPI(response.data.results);
        await setIsLoading(false);
    }

    return (
        <Layout style={styles.container}>
            {isLoading ?
                (<ActivityIndicator size="large" color="#0000ff"/>) :
                (<View>
                    <Input placeholder="Search" onChangeText={(text) => setName(text)}/>
                    <Button appearance='ghost' accessoryLeft={Assets.SearchIcon}/>
                    <Button appearance='ghost' accessoryLeft={Assets.closeIcon}/>
                    <List
                    data={dataAPI}
                    keyExtractor={(item, index) => (Math.floor(Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0')}
                    renderItem={renderMostPopular}
                    style={styles.list}/>
                </View>)
            }
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(HomePage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width :'100%',
    },
});


