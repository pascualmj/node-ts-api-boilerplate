const prompt = require('prompt')
const schema = require('./schema')
const createResource = require('./creator')
const fs = require('fs')

// Prompt configuration
prompt.message = ''
prompt.delimiter = ''
prompt.colors = false

async function exec() {
  prompt.start()
  try {
    const { resourceName } = await prompt.get(schema)
    createResource({ resourceName })
    console.log('Resource created successfully!')
  } catch (err) {
    console.log('Resource creation cancelled!')
  }
}

exec()
