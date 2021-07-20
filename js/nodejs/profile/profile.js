const https = require("https");
const http = require("http");

function printMSG(userN, badgeCount, points) {
  const message = `${userN} has ${badgeCount} total badge(s) and ${points} number of points in JavaScript`;
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

function getProfile(userName) {
  try {
    const request = https.get(
      `https://teamtreehouse.com/${userName}.json`,
      (response) => {
        if (response.statusCode === 200) {
          let body = "";

          response.on("data", (data) => {
            body += data.toString();
          });

          response.on("end", () => {
            try {
              const profile = JSON.parse(body);
              printMSG(
                userName,
                profile.badges.length,
                profile.points.JavaScript
              );
            } catch (e) {
              printError(e);
            }
          });
        } else {
          const message = `There was an error getting the profile for ${userName} with status code (${
            http.STATUS_CODES[response.statusCode]
          })`;
          const statusCodeError = new Error(message);
          printError(statusCodeError);
        }
      }
    );
    request.on("error", printError);
  } catch (e) {
    printError(e);
  }
}

module.exports.getProfile = getProfile;