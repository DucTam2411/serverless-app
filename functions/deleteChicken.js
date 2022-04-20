const formattedResponse = require("./utils/formattedResponse");
const { DELETE_CHICKEN } = require("./utils/chickenQueries");
const sendQueries = require("./utils/sendQueries");
require("dotenv").config();

exports.handler = async (event) => {
    const { id } = JSON.parse(event.body);
    console.log(id);
    const variables = { id };
    try {
        const { deleteLink: deletedLink } = await sendQueries(
            DELETE_CHICKEN,
            variables
        );

        const real_data = deletedLink;
        return formattedResponse(200, real_data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, err);
    }
};
