import { useEffect, useState } from "react";
import AddChicken from "../components/AddChicken";
import ChickenGrid from "../components/ChickenGrid";
import ChickenTable from "../components/ChickenTable";
import Menu from "../components/Menu";
import ChickenOverviewTab from "../components/ChickenOverviewTab";

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
        console.log("Refreshing Chicken");
    };

    useEffect(() => {
        loadChickens();
    }, []);

    const style = {
        marginTop: "30px",
        fontSize: "2rem",
    };
    return (
        <div className="ui container">
            <h1 className="ui center aligned header" style={style}>
                Chicken Management System
            </h1>
            <div className="ui divider"></div>

            <h1>Overview</h1>

            <ChickenOverviewTab
                chickens={panda}
                refreshChicken={loadChickens}
            />
        </div>
    );
}
