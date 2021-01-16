/** Import React **/
import React from 'react';

/** React navigator **/
import { createStackNavigator } from '@react-navigation/stack';

/** Import Définitions **/
import Assets from "../defintions/Assets";

/** Import de mes pages **/
import HomePage from "../pages/HomePage";
import FavPage from "../pages/FavPage";
import ObjectDetailsPage from "../pages/ObjectDetailsPage";

/** Import UIKITTEN**/
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

/** Constantes **/
const { Navigator, Screen } = createBottomTabNavigator();
const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();

/**
 * Gestions de la page principale
 */
function HomePageScreen() {
    return (
        <SearchNavigation.Navigator
            initialRouteName="ViewHomePage"
        >
            <SearchNavigation.Screen
                name="ViewHomePage"
                component={HomePage}
                options={{ title: 'People' }}
            />
            <SearchNavigation.Screen
                name="ViewObjectPage"
                component={ObjectDetailsPage}
                options={{ title: 'Followed' }}
            />
        </SearchNavigation.Navigator>
    )
};

/***
 * Gestions de la page favori
 */
function FavPageScreen() {
    return (
        <FavNavigation.Navigator
            initialRouteName="ViewFavPage"
        >
            <FavNavigation.Screen
                name="ViewFavPage"
                component={FavPage}
                options={{ title: 'Followed' }}
            />
        </FavNavigation.Navigator>
    )
};

/**
 * Visuel des buttons
 */
const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='People' icon={Assets.PeopleIcon}/>
        <BottomNavigationTab title='Followed' icon={Assets.FavIcon}/>
    </BottomNavigation>
);

/**
 * Fonction qui déclare les composants
 */
const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='People' component={HomePageScreen}/>
        <Screen name='Followed' component={FavPageScreen}/>
    </Navigator>
);

/**
 * Composant principale qui gère la navigation
 * Premier appelé
 */
const NavigatorApplication = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

export default NavigatorApplication;