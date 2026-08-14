// Usage site for the ejs dependency (drives symbol-usage analysis).
var ejs = require('ejs');

module.exports = function renderTemplate(tpl, data) {
  return ejs.render(tpl, data);
};
