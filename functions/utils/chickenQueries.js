const DELETE_CHICKEN = `
    mutation($id: ID!) {
        deleteChicken( id: $id) {
            _id
        }
    }
`;

const GET_CHICKENS = `
    query{
        allChickens{
            data{
                name
                description
                product_origin
                _id
                number
                marketId
            }
        }
    }

`;

module.exports = {
    DELETE_CHICKEN,
    GET_CHICKENS,
};
