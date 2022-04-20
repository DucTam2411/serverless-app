const { GET_CHICKENS } = require("./utils/chickenQueries");
const formattedResponse = require("./utils/formattedResponse");
const sendQueries = require("./utils/sendQueries");
require("dotenv").config();

exports.handler = async (event) => {
    try {
        const res = await sendQueries(GET_CHICKENS);
        const data = res.allChickens.data;
        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, err);
    }
};
