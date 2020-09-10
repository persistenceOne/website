const initialState = {
  language: 'en'
};

const languages = function (state = initialState, action) {
  if (action.type === 'changeLanguage') {
    return {
      ...state,
      language: action.value.lang,
    }
  }
  return state;
};

export default languages;