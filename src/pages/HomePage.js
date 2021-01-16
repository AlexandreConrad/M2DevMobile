/** Import React **/
import React, {useState} from 'react';
import { StyleSheet, Text, FlatList,TextInput,ActivityIndicator} from 'react-native';

/** Import UI Kitten et Redux **/
import {Layout, List,Button} from "@ui-kitten/components";
import {connect} from 'react-redux';

/** Call API **/
import fakeCallApiObject from "../helpers/fakeCallApiObject";
import ObjectListItems from "../components/ObjectListItems";
import {getWeatherByCityName} from "../Api/OpenWeatherMap";

/** Import helpers favoris **/
import utils from "../utils/utils";

const HomePage = ({navigation,favObjects}) => {

    /** Constantes **/
    const [isLoading , setIsLoading] = useState(false);
    //const [dataAPI , setDataAPI ] = useState(fakeCallApiObject);
    const [dataAPI , setDataAPI ] = useState([]);
    const [cityName, setCityName] = useState("");

    /** Permet la navigation vers un objet **/
    const navigationOnClick = async(dataAPI) => {
        navigation.navigate("ViewObjectPage", {dataAPI});
    }

    /** Retourne mon composant aperçu d'object **/
    const renderItems = ({item}) => {
        return (<ObjectListItems dataAPI={item} onClick={navigationOnClick}/>);
    }

    /** Récupération de la liste de l'api **/
    const requestWeatherByCityName = async() => {
        await setIsLoading(true);
        await setDataAPI([]);
        let response = await getWeatherByCityName(cityName);
        await setDataAPI(response.data.list);
        await setIsLoading(false);
    }

    return (
        <Layout style={styles.container}>
            <Text>Page Home !</Text>
            <TextInput placeholder="Ville" onChangeText={(text) => setCityName(text)}/>
            <Button
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',}}
                name={'map-marker-alt'}
                onPress={requestWeatherByCityName }>Rechercher</Button>
            {isLoading ?
                (<ActivityIndicator size="large" color="#0000ff"/>) :
                (<List
                    data={dataAPI}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItems}/>)
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
});


