import axios from "axios";
import { useState, useEffect } from "react";

export default function Chicken({ chickens }) {
    return (
        <div>
            <h1>This is chicken page</h1>
            <ul>
                {chickens &&
                    Object.values(chickens).map((chicken) => {
                        <li>{chicken.name}</li>;
                    })}
            </ul>
        </div>
    );
}
