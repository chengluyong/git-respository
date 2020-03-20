const libre = require('libreoffice-convert');
const fs = require('fs');

const path = require('path');

const extend = '.pdf';
let enterPath = path.join("E:\\document\\微信聊天记录\\WeChat Files\\mxds123456\\FileStorage\\File\\2020-03\\101-200\\101-200", '/122.doc');

// Read file
 enterPath = fs.readFileSync(enterPath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(enterPath, extend, undefined, (err, done) => {
  if (err) {
    console.log(`Error converting file: ${err}`);
  }

  // Here in done you have pdf file which you can save or transfer in another stream
  fs.writeFileSync("E:\\document\\微信聊天记录\\WeChat Files\\mxds123456\\FileStorage\\File\\2020-03\\101-200\\101-200\\122.pdf", done);
});