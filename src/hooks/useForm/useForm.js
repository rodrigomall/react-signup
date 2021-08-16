import { useReducer, useState } from 'react';

const useForm = (reducer, initialState, schema)    => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [validationError, setValidationError] = useState([]);

  const onChange = (e) => {
    dispatch({field: e.target.name, value: e.target.value});
  };

  const validate = () => {
    const validation = schema.validate(state, {abortEarly: false, errors: {wrap: {label: ''},}});
    setValidationError(validation.error ? validation.error.details : []);
    return validation.error ? true : false;
  };

  const form = {};

  Object.keys(initialState).forEach((key) => {
    const errObj = validationError.filter(e => e.context.key === key)[0];
    form[key] = {
      name: key,
      onChange,
      value: state[key],
      invalid: errObj ? true : false,
      message: errObj && errObj.message,
      onFocus: () => { if (errObj) { setValidationError(validationError.filter(e => e.context.key !== key))}}
    }
  });

  return {
    form: {
      ...form,
    },
    validate,
    validationError: {
      set: setValidationError,
      value: validationError
    },
    dispatch
  };
};

export default useForm;