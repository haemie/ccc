const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jmezhang:lz5CkGaVzp3bB6BL@cluster0.fwfsjxf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'ccc',
})
.then(() => console.log("Connected to Mongo DB."))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const genericPartSchema = new Schema({
  name: String,
  manufacturer: {type: String, default: 'n/a'},
  price: {type: Number, default: 0},
  deviceType: {type: String, default: 'unknown'},
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: 'genericPart',
  },
  maxUsbChildren: {type: Number, default: 0},
  usbChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
  maxPcieChildren: {type: Number, default: 0},
  pcieChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
  maxFanChildren: {type: Number, default: 0},
  fanChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
  maxSataChildren: {type: Number, default: 0},
  sataChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
  maxHdmiChildren: {type: Number, default: 0},
  hdmiChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
  maxDpChildren: {type: Number, default: 0},
  dpChildren: [{name: String, id: { type: Schema.Types.ObjectId, ref: 'genericPart' }}],
})

const GenericPart = mongoose.model('genericPart', genericPartSchema)

module.exports = {
  GenericPart,
};

// const { Pool } = require("pg");

// const PG_URI =
//   "postgres://yzopeivk:26kPr8Co8n47XjyVs7psVFv5qNSdHA6I@drona.db.elephantsql.com/yzopeivk";

// // create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI,
// });

// // Adding some notes about the database here will be helpful for future you or other developers.
// // Schema for the database can be found below:
// // https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// // We export an object that contains a property called query,
// // which is a function that returns the invocation of pool.query() after logging the query
// // This will be required in the controllers to be the access point to the database

// module.exports = {
//   query: (text, params, callback) => {
//     console.log("executed query", text);
//     return pool.query(text, params, callback);
//   },
// };
