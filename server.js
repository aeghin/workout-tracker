const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/views.js")
const apiRoutes = require("./routes/api.js")
 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);
app.use(apiRoutes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});