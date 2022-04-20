import styles from "../styles/Home.module.css";
import Chicken from "../components/chicken";
import { useEffect, useState } from "react";
import CardExampleCard from "../components/card";
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
        "margin-top": "36px;",
    };
    return (
        <div className="ui container">
            <h1 class="ui center aligned header" style={style}>
                Responsive UI Examples
            </h1>
            <div class="ui divider"></div>
            <h1>hello</h1>

            <ChickenTable chickens={panda} refreshChicken={loadChickens} />
        </div>
    );
}
