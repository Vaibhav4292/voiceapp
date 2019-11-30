var express = require("express");
var app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const accountSid = "AC5dacdbd814ba5366ccaf6417767e67ec";
const authToken = "1f8fe95b060f01fd6c4cb873480c8e5c";

app.get("/makecall", (req, res, next) => {
  const client = require("twilio")(accountSid, authToken);

  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+919354741469",
      from: "+12028835470"
    })
    .then(call => console.log(call.sid));
});
