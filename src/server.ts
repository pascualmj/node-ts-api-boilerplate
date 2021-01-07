import app from './app'

app.set('port', process.env.APP_PORT)

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
