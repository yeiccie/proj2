import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!这是我的第一个NodeJS项目');
  hello();
})

app.get('/students', (req, res) => {
  var query = req.query;

  console.log("==============");
  console.log(query);
  console.log("==============");
  console.log(query.name);
  console.log("==============");

  res.send('Hello World!这是请求学生列表');
  hello();
})

app.post('/studen', (req, res) => {
  res.send('Hello World!这是post学生信息');
  var query = req.query;

  console.log("==============");
  console.log(query);
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


