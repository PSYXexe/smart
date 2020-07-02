const CryptoJS = require("crypto-js");
//var en = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");
//var de = CryptoJS.TripleDES.decrypt(en, "Secret Passphrase");
//console.log(de.sigBytes)

let userID = "";
let guildID = "";
const e = text => {
  if (!text) return;
  const passphrase = "1";
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

const d = ciphertext => {
  if (!ciphertext) return;
  const passphrase = "1";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  console.log(bytes)
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
let express = require('express');
let app = express();
let guild = e("727934714974830722");
let user = e("382572416708116482");
//console.log(`guild: ${guild}\nUser: ${user}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guild}&userID=${user}`}`)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {guildID: req.query.guildID,userID: req.query.userID});
});
app.post("/verify", (req,res) => {
  console.log(req.query)
  const guildID = d(req.query.guildID);
  const userID = d(req.query.userID);
  
  console.log(`guild: ${guildID}\nUser: ${userID}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guildID}&userID=${userID}`}`) //what logo should i design for the bot? a cop? a robot? an alien?
  res.redirect("/")
})

app.get("/verified", (req,res) => {
  //client.guilds.cache.get(req.headers.guildID).members.cache.get(req.headers.userID).roles.add()
//  alert(d(req.headers.guildID))
})

app.listen(3000, () => console.log('Example app listening on port 4000!'));