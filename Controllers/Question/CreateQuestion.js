import Question from "../../database/Question.js";

export default (req, res) => {
  const { body } = req
  Question.create(body)
  .then(()=> {
    res.redirect("/questions")
  });
}