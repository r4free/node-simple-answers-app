import Answer from "../../database/Answer.js";

export default (req, res) => {
  console.log("asdfasdf");
  const { params: { id } } = req
  Answer.destroy({ where: { id }})
  .then(()=> {
    res.redirect("..")
  });
}