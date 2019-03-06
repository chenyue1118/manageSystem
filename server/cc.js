const nodemailer = require('nodemailer');
const config = require('./../config.json');

const WEBCONFIG = config;

if (WEBCONFIG.mail && WEBCONFIG.mail.enable) {
  mail = nodemailer.createTransport(WEBCONFIG.mail);
}

let c = {};
if (mail) c.mail = mail;
module.exports = c;
