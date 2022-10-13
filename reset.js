// Removes the teamwork.html file from the dist/ folder.
// Used in `npm run reset` script

const fs = require('fs');
if (fs.existsSync('./dist/teamwork.html')) {
  fs.unlinkSync('./dist/teamwork.html');
  console.log('/dist/ folder reset!');
}
