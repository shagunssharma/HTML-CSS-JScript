const express = require('../../../.npm-global/node_modules/express')
const app = express()
const port = 3000

// app.use(() => {
//     console.log('We got a new request!!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/r/:subpage', (req, res) => {
    const { subpage } = req.params;
    console.log(req.params)
    res.send(`<h1>Hello World, welcome to ${subpage} page. </h1>`)
})

app.get('/r/:subpage/:subsubpage', (req, res) => {
    const par = req.params;
    console.log(par)
    res.send(`<h1>Hello World, welcome to ${par.subsubpage} of ${par.subpage} page. </h1>`)
})

app.get('/search', (req, res) => {
    const query = req.query
    res.send(`Hello traveller, here is yours query- ${query.q} & ${query.color}`)
})

app.get('*', (req, res) => {
    res.send("<h1>I don't know that path</h1>")
})