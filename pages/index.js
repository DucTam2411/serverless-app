import { useEffect, useState } from "react";
import ChickenTable from "../components/ChickenTable";

export default function Home() {
    const [panda, setPanda] = useState([]);
    const loadChickens = async () => {
        try {
            const res = await fetch("/.netlify/functions/getChickens");
            const chickens2 = await res.json();
            setPanda(chickens2);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadChickens();
    }, []);

    const style = {
        marginTop: "36px",
    };
    return (
        <div className="ui container">
            <h1 className="ui center aligned header" style={style}>
                Chicken Management System
            </h1>
            <div className="ui divider"></div>
            <h1>hello</h1>

            <ChickenTable chickens={panda} refreshChicken={loadChickens} />
        </div>
    );
}
