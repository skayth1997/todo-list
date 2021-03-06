const validateForm = (formValidation, form) => {
  for (const key in formValidation) {
    formValidation[key].valid = formValidation[key].validate(form[key]);
  }

  return formValidation;
};

const isValidForm = ({ ...formValidation }) => {
  for (const key in formValidation) {
    if (!formValidation[key].valid) {
      return false;
    }
  }

  return true;
};

export { validateForm, isValidForm };
