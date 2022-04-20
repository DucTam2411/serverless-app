import React from "react";

export default function ChickenTable({ chickens, refreshChicken }) {
    const deleteChicken = async (chicken) => {
        const id = chicken._id;
        alert(id);
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

    return (
        <table class="ui celled table">
            <thead>
                <tr>
                    <th>Type of chicken</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {chickens.map((chicken) => {
                    return (
                        <tr key={chicken._id}>
                            <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                        {chicken.name} ({chicken.product_origin}
                                        )
                                        <div class="sub header">
                                            {chicken.description}
                                        </div>
                                    </div>
                                </h4>
                            </td>
                            <td>22</td>
                            <td>
                                <button
                                    class="ui icon button"
                                    onClick={() => deleteChicken(chicken)}
                                >
                                    <i class="delete icon"></i>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
