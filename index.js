let express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port http://127.0.0.1:3000/'))


app.post('/mail', (req, res) => {
  //  console.log(req.json())
    res.status(200).json({ message : "Thanks, we'll contact you soon"});

})