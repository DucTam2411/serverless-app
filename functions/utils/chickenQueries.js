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
                type
            }
        }
    }

`;

const UPDATE_CHICKEN = `
  mutation($id: ID!, $name: String!, $type: String!, $product_origin: String!, $description: String!, $number : Int!, $marketId : String!  ) {
        updateChicken( id: $id, data: { name:$name, type: $type, description: $description, product_origin: $product_origin, number: $number, marketId : $marketId }) {
            name
            description
            product_origin
            _id
            number
            marketId
            type
        }
    }
`;

module.exports = {
    DELETE_CHICKEN,
    GET_CHICKENS,
    UPDATE_CHICKEN,
};
