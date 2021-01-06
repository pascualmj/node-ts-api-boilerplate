const fs = require('fs')
const prompt = require('prompt')
const schema = require('./schema')
const createResource = require('./creator')
const { MESSAGES } = require('./constants')

// Prompt configuration
prompt.message = ''
prompt.delimiter = ''
prompt.colors = false

async function exec() {
  prompt.start()
  try {
    const { resourceName } = await prompt.get(schema)
    const result = await createResource({ resourceName })
    if (!result) throw new Error(MESSAGES.resourceExists)
    console.log(MESSAGES.resourceCreated)
  } catch (err) {
    switch (err.message) {
      case [MESSAGES.resourceExists]:
        console.log(MESSAGES.resourceExists)
        break
      default:
        console.log(MESSAGES.resourceCreationCancelled)
    }
  }
}

exec()
