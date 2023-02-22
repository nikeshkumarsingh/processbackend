const app = require("./index");
const connect = require("./config/db.js");
const port =process.env.PORT || 5000
app.listen(port, async function () {
  try {
    await connect();
    console.log("listening 5000");
  } catch (err) {
    console.log(err);
  }
});