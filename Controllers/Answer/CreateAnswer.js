import Answer from "../../database/Answer.js";

export default (req, res) => {
  const { body } = req
  Answer.create(body)
  .then(()=> {
    console.log(req)
    res.redirect("/question/" + body.question_id)
  });
}