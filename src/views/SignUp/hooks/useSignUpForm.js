import { useState } from 'react';
import Joi from 'joi';
import useForm from '../../../hooks/useForm/useForm';
import Swal from 'sweetalert2'

const initialState = {
  lastName: '',
  firstName: '',
  email: ''
};

const initial = {
  checked: {
    advance: false,
    alert: false,
    other: false
  },
  selected: {
    residentObj: { value: 0, label: '- Select One -' },
    resident: '',
  }
}

const reducer = (state, action) => {
  return {
    ...state,
    [action.field] : action.value
  };
};

const schema = Joi.object({
  lastName: Joi.string().min(3).label('LastName'),
  firstName: Joi.string().min(3).label('firstName').required(),
  email: Joi.string().email({ tlds: {allow: false} }).label('email').required()
});

const useSignUpForm = () => {
  const { form, validate, dispatch } = useForm(reducer, initialState, schema);
  const [stateChecked, setChecked] = useState(initial.checked);
  const [stateSelected, setSelected] = useState(initial.selected);

  const reset = () => {
    dispatch({field: 'lastName', value: initialState.lastName});
    dispatch({field: 'firstName', value: initialState.firstName});
    dispatch({field: 'email', value: initialState.email});
    setChecked(initial.checked);
    setSelected(initial.selected)
  }

  const onCheckedAdvance = () => {
    console.log(stateChecked.advance);
    setChecked({
      ...stateChecked,
      advance: !stateChecked.advance
    });
  }

  const onCheckedAlert = () => {
    setChecked({
      ...stateChecked,
      alert: !stateChecked.alert
    });
  }

  const onCheckedOther = () => {
    setChecked({
      ...stateChecked,
      other: !stateChecked.other
    });
  }

  const onSelectResident = (param) => {
    setSelected({
      residentObj: param,
      resident: param.label
    });
  }

  const onSubmitForm = (params) => {
    console.log(params);
    Swal.fire(
      'Sent Successfully!',
      '',
      'success'
    );
  }

  return {
    ...form,
    reset,
    onSubmitForm,
    onCheckedAdvance,
    onCheckedAlert,
    onCheckedOther,
    onSelectResident,
    stateChecked,
    stateSelected,
    validate
  };
};

export default useSignUpForm;