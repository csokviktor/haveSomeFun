var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

// Routing
function home(req, res) {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      renderer.view("header", {}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
      res.end();
    } else {
      req.on("data", function (postBody) {
        var query = querystring.parse(postBody.toString());
        res.writeHead(303, { Location: `/${query.username}` });
        res.end();
      });
    }
  }
}

function user(req, res) {
  var userName = req.url.replace("/", "");
  if (userName.length > 0) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    renderer.view("header", {}, res);

    var studentProfile = new Profile(userName);
    studentProfile.on("end", function (profileJSON) {
      var values = {
        avatarURL: profileJSON.gravatar_url,
        userName: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript,
      };
      renderer.view("profile", values, res);
      renderer.view("footer", {}, res);
      res.end();
    });

    studentProfile.on("error", function (error) {
      console.log(error.message);
      renderer.view("error", { errorMessage: error.message }, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
      res.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
