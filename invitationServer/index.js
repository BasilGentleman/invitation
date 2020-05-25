const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static('static'))

app.post("/msg",(req,res) => {
	console.log(req.body)
	res.json("success")
})

app.listen(3000, () => console.log('listening on port 3000!'))