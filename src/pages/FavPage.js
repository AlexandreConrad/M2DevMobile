/** Import React **/
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text} from 'react-native';

/** Import UI Kitten **/
import {Layout, List} from "@ui-kitten/components";

/** Import Redux **/
import {connect} from "react-redux";

/** Import helpers / Utils **/
import ObjectListItems from "../components/ObjectListItems";
import fakeCallApiObject from "../helpers/fakeCallApiObject";
import utils from "../utils/utils";

/** Call API **/
import {getWeatherByID} from "../Api/OpenWeatherMap";

const FavPage = ({navigation,favObjects}) => {

    /** Constantes **/
    const [listFavoris, setListFavoris] = useState([]);

    /** Fonction qui mets à jour la liste au début de la page **/
    useEffect(() => {
        (async () => {
            await refreshList();
        })();
    }, [favObjects]);

    /** Mets la liste de favoris à jours **/
    const refreshList = async() => {
        let temp = [];
        try{
            for(const id of favObjects) {
                //temp.push(getObjectByID);
                let response = await getWeatherByID(id);
                await temp.push(response.data);
            }
            setListFavoris(temp);
        }catch (error){
            console.log("Erreur RefreshList");
        }
    }

    const getObjectByID = (id) => {
        for (const o of fakeCallApiObject)
            if(o.id === id)
                return o;
    }

    /** Navigations vers l'item  **/
    const navigationOnClick = async(dataAPI) => {
        navigation.navigate("ViewObjectPage", {dataAPI});
    }

    /** Retourne mon composant aperçu d'object **/
    const renderItems = ({item}) => {
        return (<ObjectListItems dataAPI={item} onClick={navigationOnClick}/>);
    }

    return (
        <Layout style={styles.container}>
            <Text>Page Fav !</Text>
            <List
                data={listFavoris}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={renderItems}/>
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(FavPage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


