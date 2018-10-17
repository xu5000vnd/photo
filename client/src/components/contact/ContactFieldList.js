module.exports = [
  {
    label: 'Name', type: 'text', name: 'name',
    validates: { required: 'Field Name is required' }
  },
  {
    label: 'Phone', type: 'text', name: 'phone',
    validates: { }
  },
  {
    label: 'Email', type: 'text', name: 'email',
    validates: { required: 'Field Email is required', email: 'Field Email is wrong format' }
  },
  {
    label: 'Email Body', type: 'textarea', name: 'body',
    validates: { required: 'Field Email Body is required' }
  }
];
