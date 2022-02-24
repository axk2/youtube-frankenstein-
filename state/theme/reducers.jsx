import {
    THEME_DARK,
    THEME_LIGHT
} from './types'


const themeState = {
    theme: false
}


/**
 * Reducer encargado de controlar tema
 * @param state themeState
 * @param action Typo de Accion
 * @returns Estado modificado
 */
export const themeReducer = (state = themeState, action) => {
    switch (action.type) {
        case THEME_DARK:
            return {...state, theme: true}

        case THEME_LIGHT:
            return {...state, theme: false}

        default:
            return state
    }
}