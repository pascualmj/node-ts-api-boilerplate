import app from './app'

app.set('port', 5000)

app.listen(app.get('port'), (): void => {
  console.log(`Server listening on port ${app.get('port')}`)
})
