var fs = require("fs");

function mergeValue(values, content) {
  for (var key in values) {
    content = content.replace(`{{${key}}}`, values[key]);
  }

  return content;
}

function view(templateName, values, response) {
  var fileContent = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf8'});

  fileContent = mergeValue(values, fileContent);

  response.write(fileContent);
}

module.exports.view = view;
