module.exports = {
  properties: {
    resourceName: {
      description: 'Enter the resource name:',
      type: 'string',
      pattern: /^[a-z]+[A-Za-z]+$/,
      message:
        'Resource name accepts only uppercase and lowercase letters, but must start in lowercase.',
      required: true,
    },
  },
}
