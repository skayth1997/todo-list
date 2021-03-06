const validation = {
  title: {
    valid: true,
    className: 'is-invalid',
    validate: (title) => /[\d\w ]+/.test(title),
  },
  description: {
    valid: true,
    className: 'is-invalid',
    validate: (description) => /[\d\w ]+/.test(description),
  },
  color: {
    valid: true,
    className: 'is-invalid',
    validate: () => true,
  },
};

export default validation;
