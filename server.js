const CryptoJS = require("crypto-js");
const db = require("sigidb")
let userID = "";
let guildID = "";
const e = text => {
  if (!text) return;
  return CryptoJS.TripleDES.encrypt(text, "Secret Passphrase");
};
const d = cyphertext => { //lol sypher
  if (!cyphertext) return;
  return CryptoJS.TripleDES.decrypt(cyphertext, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
};

let express = require('express');
let app = express();
let guild = e("727934714974830722");
let user = e("382572416708116482");
console.log(`guild: ${guild}\nUser: ${user}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guild}&userID=${user}`}`)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {guildID: req.query.guildID,userID: req.query.userID});
});
app.post("/verify", async(req,res) => {
  console.log(req.query)
  const guildID = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID = d(req.query.userID.replace(/ /gi, "+"));
//  var en = CryptoJS.TripleDES.encrypt("382572416708116482", "Secret Passphrase");
//var de = CryptoJS.TripleDES.decrypt(en, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

  console.log(`guild: ${guildID}\nUser: ${userID}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guildID}&userID=${userID}`}`) //what logo should i design for the bot? a cop? a robot? an alien?
  db.set(`verified_${guildID}_${userID}`, "verified.")
  await res.redirect(`/verified?guildID=${req.query.guildID.replace(/ /gi, "+")}&userID=${req.query.userID.replace(/ /gi, "+")}`);
})

app.get("/verified", (req,res) => {
  //client.guilds.cache.get(req.headers.guildID).members.cache.get(req.headers.userID).roles.add()
//  alert(d(req.headers.guildID))
})

app.listen(3000, () => console.log('Example app listening on port 4000!'));