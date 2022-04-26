import React from "react";
import { useState } from "react";

export default function ChickenRow({ chicken, refreshChicken }) {
    const [quantity, setQuantity] = useState(chicken.number);

    const alignAction = {
        textAlign: "center",
    };

    const buttonMargin = {
        margin: "7px 10px",
    };

    const deleteChicken = async (chicken) => {
        const id = chicken._id;
        try {
            await fetch("/.netlify/functions/deleteChicken", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            refreshChicken();
        } catch (err) {
            console.error("AHHH", err);
        }
    };

    const updateChicken = async (chicken) => {
        const new_chicken = { ...chicken, number: parseInt(quantity) };
        console.log(new_chicken);
        try {
            await fetch("/.netlify/functions/updateChicken", {
                method: "PUT",
                body: JSON.stringify(new_chicken),
            });
        } catch (err) {
            console.error("AHH", err);
        }
    };

    return (
        <tr key={chicken._id}>
            <td>
                <h4 className="ui  header">
                    <div className="content">{chicken.marketId}</div>
                </h4>
            </td>

            <td>
                <h4 className="ui header">
                    <div className="content">
                        {chicken.name} ({chicken.product_origin})
                        <div className="sub header">{chicken.description}</div>
                    </div>
                </h4>
            </td>
            <td>
                <div className="ui input">
                    <input
                        type="text"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        placeholder="Search..."
                    />
                </div>
            </td>
            <td>
                <div>
                    <button
                        className="ui icon button"
                        onClick={() => deleteChicken(chicken)}
                    >
                        <i className="pencil icon"></i> Edit
                    </button>

                    <button
                        style={buttonMargin}
                        className="ui primary icon button"
                        onClick={() => updateChicken(chicken)}
                    >
                        <i className="save icon"></i> Save
                    </button>

                    <button
                        className="ui red icon button"
                        onClick={() => deleteChicken(chicken)}
                    >
                        <i className="delete icon"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
