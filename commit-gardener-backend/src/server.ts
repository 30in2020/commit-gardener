import { admin } from "./firebase";
import app from "./express";
import axios from "axios";
const env = require("dotenv").config({
  path: __dirname + "/.env"
}).parsed;

interface ICustomRequest<T> extends Express.Request {
  body: T;
}

interface ICustomResponse extends Express.Response {
  status: Function;
}

interface INotificationReqBody {
  to: string;
}

app.post(
  "/v1/notification",
  async (req: ICustomRequest<INotificationReqBody>, res: ICustomResponse) => {
    const { body } = req;
    const { to } = body;

    try {
      const message = {
        notification: {
          title: "My First Push",
          body: `Push Message`
        },
        data: {
          data: "Custom Data"
        },
        token: to
      };

      const response = await admin.messaging().send(message);
      console.log(response);
      return res.status(200).send({
        status: 200,
        response
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: error.message
      });
    }
  }
);

app.get("/callback", (req, res) => {
  console.log("callback");
  const requestToken = req.query.code;
  axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${env.GITHUB_CLIENT_ID}&client_secret=${env.GITHUB_CLIENT_SECRET}&code=${requestToken}`,
    headers: {
      accept: "application/json"
    }
  }).then(response => {
    const accessToken = response.data.access_token;
    console.log(accessToken);
  });
});

app.listen(8080, () => console.log(`Example app listening on port ${8080}!`));
