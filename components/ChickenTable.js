import React from "react";
import ChickenRow from "./ChickenRow";

export default function ChickenTable({ chickens, refreshChicken }) {
    if (!chickens.length) {
        return (
            <div className="ui center aligned text container">
                Empty. You don't have any chickens
            </div>
        );
    }

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Serial number</th>
                    <th>Type of chicken</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {chickens.map((chicken) => {
                    return (
                        <ChickenRow
                            key={chicken._id}
                            chicken={chicken}
                            refreshChicken={refreshChicken}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}
