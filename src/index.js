const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const { PORT } = require("./config/serverConfig");
const jobs = require("./utils/job");
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    jobs();

    // sendBasicEmail(
    //   '"Support" <support@admin.com>',
    //   "hnik70848@gmail.com",
    //   "This is a testing email",
    //   "Hey user how are you? I hope you are doing good."
    // );

    // cron.schedule("*/1 * * * *", () => {
    //   console.log("running a task every two minutes");
    // });
  });
};

setupAndStartServer();
