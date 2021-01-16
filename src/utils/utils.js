import React from "react";

/**
 * Permet de donner certains fonction à différente classe
 */
const utils = {
    /**
     * Permet de récupérer le state de mes favories et l'ajoute dans mes props
     */
    mapStateToProp : (state) => {
        return {
            favObjects: state.favObjectID
        };
    },
    /**
     * Permet d'ajouter à la mémoire une données
     */
    saveObject : async (id,dispatch) => {
        const action = { type: 'SAVE_OBJECT', value: id };
        dispatch(action);
    },
    /**
     * Permet de retirer de la mémoire une données
     */
    unsaveObject : async (id,dispatch) => {
        const action = { type: 'UNSAVE_OBJECT', value: id };
        dispatch(action);
    },
};

export default utils;