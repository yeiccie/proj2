import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!');
  hello();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * The first nodeJS
 */
function hello(){
    console.log("Hello world! This is a log on server console....");
}


