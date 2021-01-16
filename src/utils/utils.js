/**
 * Permet de récupérer le state de mes favories et l'ajoute dans mes props
 * @param state
 * @returns {{favObjects: ([]|*[])}}

const mapStateToProps = (state) => {
    return {
        favObjects: state.favObjectID
    }
}
 */


import React from "react";
import SearchIcon from '../../assets/icon.png';
import {Icon} from "@ui-kitten/components";

const mapStateToProps = {
    mapStateToProp : (state) => {
        return {
            favObjects: state.favObjectID
        };
    },
};

export default mapStateToProps;