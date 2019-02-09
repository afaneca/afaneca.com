import * as types from "../actions/actionTypes";
import * as locales from "../locale"
import * as strTypes from "../locale/locale_strings"

const INITIAL_STATE = {
    lang: locales.default_locale,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_LOCALE:
            return { ...state, lang: action.locale };
        case types.GET_LOCALIZED_STRING:
            return { ...state, [strTypes[action.strType]]: action.str };
        default:
            return state;
    }

}