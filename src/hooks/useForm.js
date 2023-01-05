import { useReducer } from 'react';

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_FORM: 'CLEAR_FORM',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.CLEAR_FORM:
      return { ...action.initialFormState };
    default:
      return state;
  }
};

export const useForm = (initialFormState) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.CLEAR_FORM, initialFormState });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
  };
};
