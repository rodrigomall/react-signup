
export const selectStyles = {
  control: (provided, state) => {
    return {
      ...provided,
      borderRadius: 2,
      borderColor: state.isFocused ? '#F0F0F2' : '#F0F0F2',
      ':hover': {
        borderColor: '#F0F0F2'
      },
      boxShadow: 'none'
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      zIndex: 2
    };
  },
  valueContainer: (provided) => {
    return {
      ...provided,
      padding: '0.375rem 0.75rem'
    };
  },
  input: (provided) => {
    return {
      ...provided,
      margin: 0,
      paddingTop: 0,
      paddingBottom: 0
    };
  },
  singleValue: (provided) => {
    return {
      ...provided,
      marginLeft: 0,
      marginRight: 0,
      fontSize: 16
    };
  },
  placeholder: (provided) => {
    return {
      ...provided,
      color: '#76777B',
      marginLeft: 0,
      marginRight: 0,
      fontSize: 16
    };
  },
  indicatorSeparator: (provided) => {
    return {
      ...provided,
      backgroundColor: 'none'
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: state.isFocused ? '#F0F0F2' : '#F0F0F2',
      ':hover': {
        color: '#F0F0F2'
      }
    };
  },
};