import * as types from "./actionTypes";
import * as locales from "../locale";
import * as locale_pt from "../locale/locale_pt";
import * as locale_en from "../locale/locale_en";



export const setLocale = (lang) => {
    let newLocale;

    return dispatch => {
        if(locales[lang]){
            // the locale exists
            newLocale = lang;
        }else{
            newLocale = locales.default_locale;
        }

        //newLocale = lang;
        dispatch(setLocaleDispatcher(newLocale));
    }
}

const setLocaleDispatcher = newLocale => ({
    type: types.SET_LOCALE,
    locale: newLocale,
});

export const getLocalizedString = (strType) => {
    let localeString;
    let localeProvider;
    return (dispatch, getState) => {
        let { lang } = getState().locale;
        switch (lang) {
            case 'en': localeProvider = locale_en;
                break;
            case 'pt': localeProvider = locale_pt;
                break;
            default: localeProvider = locale_en;
                break;
        }

        if (localeProvider[strType])
            localeString = localeProvider[strType];
        else
            localeString = "LOCALE - STRING NOT FOUND!";
        dispatch(getLocalizedStringDispatcher(localeString, strType));
    }
}

const getLocalizedStringDispatcher = (localeString, strType) => ({
    type: types.GET_LOCALIZED_STRING,
    str: localeString,
    strType: strType,
});