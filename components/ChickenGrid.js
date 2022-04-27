import React from "react";
import ChickenCard from "./ChickenCard";

export default function ChickenGrid({ chickens }) {
    return (
        <div className="ui stackable four column grid ">
            {chickens &&
                chickens.map((chicken) => (
                    <ChickenCard key={chicken.id} chicken={chicken} />
                ))}
        </div>
    );
}
