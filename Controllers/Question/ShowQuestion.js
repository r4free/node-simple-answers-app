import Question from "../../database/Question.js";
import Answer from "../../database/Answer.js";

export default (req, res) => {
    const { params : { id } } = req
    Question.findOne({
      raw:true,  
      where: {
        id,
      }
    })
    .then((question) => {
        if(question) {
            Answer.findAll({ raw: true, where:{ question_id: id }})
            .then((answers)=> {
                res.render("question", {
                    question,
                    answers
                })
            })
        }else {
            res.render('index')
        }
    });
  }