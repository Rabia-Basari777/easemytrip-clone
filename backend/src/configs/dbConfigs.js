
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "easemytripdb";

//database credentials
const USERNAME = "easemytrip";
const PASSWORD = "!$*RHkYRh*73Y@7";

//default app port
const PORT = 7733;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.2rssr.mongodb.net/${DATABASE}?retryWrites=true&w=majority`; 

//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}