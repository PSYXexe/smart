const CryptoJS = require("crypto-js");
let userID = "";
let guildID = "";
const e = text => {
  if (!text) return;
  const passphrase = "abcd";
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

const d = ciphertext => {
  if (!ciphertext) return;
  const passphrase = "abcd";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {guildID: req.query.guildID,userID: req.query.userID});
});
app.post("/verify", (req,res) => {
  console.log(req.query)
  const guildID = d(req.query.guildID);
  const userID = d(req.query.userID);
  console.log(userID)
  console.log(guildID)
  res.redirect("/verified")
})

app.get("/verified", (req,res) => {
  client.
})

app.listen(3000, () => console.log('Example app listening on port 4000!'));