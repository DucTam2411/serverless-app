import { useEffect, useState } from "react";
import ChickenTable from "../components/ChickenTable";
import Menu from "../components/Menu";

export default function Home() {
    const [panda, setPanda] = useState([]);
    const [search, setSearch] = useState("");

    const loadChickens = async () => {
        try {
            const res = await fetch("/.netlify/functions/getChickens");
            const chickens2 = await res.json();
            setPanda(chickens2);
        } catch (err) {
            console.error(err);
        }
    };

    const searchKeyChangeMe = (searchKey) => {
        console.log(`SeaRCH KEY: ${searchKey}`);

        setSearch(searchKey);
        console.log("------------------\n");
        console.log(search);
        loadChickens();
        const new_chikens = panda.filter((chicken) => {
            console.log(chicken.marketId);
            console.log(search);
            return chicken.marketId.startsWith(search);
        });
        setPanda(new_chikens);
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
            <h1>Overview</h1>

            <Menu
                searchKey={search}
                setSearchKey={setSearch}
                searchKeyChange={searchKeyChangeMe}
            />
            <ChickenTable chickens={panda} refreshChicken={loadChickens} />
        </div>
    );
}
