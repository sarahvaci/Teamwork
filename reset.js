
const fs = require('fs');
if (fs.existsSync('./dist/teamwork.html')) {
  fs.unlinkSync('./dist/teamwork.html');
  console.log('/dist/ folder reset!');
}
