const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'hmongodb://localhost:27017/8000';
const DB_NAME = '8000';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
export default connection;