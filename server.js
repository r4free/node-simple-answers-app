'use strict';

import express from "express"
import bodyParser from "body-parser";
import connection from "./database/database.js";
import Answer from "./database/Answer.js";
import Question from "./database/Question.js";
import ShowQuestion from "./Controllers/Question/ShowQuestion.js";
import CreateQuestion from "./Controllers/Question/CreateQuestion.js";
import ListQuestions from "./Controllers/Question/ListQuestions.js";
import CreateAnswer from "./Controllers/Answer/CreateAnswer.js";
import DeleteAnswer from "./Controllers/Answer/DeleteAnswer.js";
import methodOverride from "method-override";


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


connection.authenticate().then(()=>{
  console.log("Autenticado com sucesso")
})

// App
const app = express();

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended:false }))

app.use(methodOverride('_method'));

app.get('/', (req, res) => res.render("index"));

app.post('/question', CreateQuestion);

app.get('/question/:id', ShowQuestion);

app.get('/questions', ListQuestions);

app.post('/answer', CreateAnswer);

app.delete('/answer/:id', DeleteAnswer);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

console.log("ok")