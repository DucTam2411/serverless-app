const { UPDATE_CHICKEN } = require("./utils/chickenQueries");
const formattedResponse = require("./utils/formattedResponse");
const sendQueries = require("./utils/sendQueries");

exports.handler = async (event) => {
    const {
        name,
        description,
        product_origin,
        _id: id,
        number,
        type,
        marketId,
    } = JSON.parse(event.body);

    const variables = {
        id,
        name,
        description,
        number,
        marketId,
        product_origin,
        type,
    };
    try {
        const { updateLink: updatedChicken } = await sendQueries(
            UPDATE_CHICKEN,
            variables
        );

        return formattedResponse(200, updatedChicken);
    } catch (err) {
        console.log(err);
        return formattedResponse(500, err);
    }
};
