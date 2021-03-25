const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Swagger API Documentation 
//Extended info: https://swagger.io/specification/#infoObject
const swaggerOptions = require("./util/swaggerObject");
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//Enable Cors for the angular Site
const corsOptions = {
  origin : 'https://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const usersRoute = require("./routes/users.route");
const auth = require('./routes/auth');
const sites = require('./routes/campingSites');
const reservations = require('./routes/reservations');
const swaggerJSDoc = require("swagger-jsdoc");

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}
//connect to mongodb
mongoose
  .connect("mongodb://localhost/campit", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));


app.use(express.json());

//use users route for api/users
app.use("/api/users", usersRoute);
app.use('/api/auth',auth);
app.use('/api/sites',sites);
app.use('/api/reservations',reservations);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
