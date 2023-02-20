import Question from "../../database/Question.js";

export default (req, res) => {

  Question.findAll({raw: true, order: [['createdAt','desc']]})
  .then(questions => {
    res.render("questions", {
      questions,
    });
  })
  
}