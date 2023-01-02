const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const infoSchema = new Schema(
  {
    title: String,
    article: String,
    url: String,
    fullArticle: String,
    order: Number
  }
);

const Info = model("Info", infoSchema);

module.exports = Info;
