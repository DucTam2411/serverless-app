import { useEffect, useState } from "react";
import AddChicken from "../components/AddChicken";
import ChickenGrid from "../components/ChickenGrid";
import ChickenTable from "../components/ChickenTable";
import Menu from "../components/Menu";
import ChickenOverviewTab from "../components/ChickenOverviewTab";

export default function Home() {
    const [panda, setPanda] = useState([]);
    const [isBoardClick, setIsBoardClick] = useState(false);
    const [isCardClick, setIsCardClick] = useState(true);
    const [isReportClick, setReportClick] = useState(false);

    const loadChickens = async () => {
        try {
            const res = await fetch("/.netlify/functions/getChickens");
            const chickens2 = await res.json();
            setPanda(chickens2);
        } catch (err) {
            console.error(err);
        }
    };

    const onBoardClick = (setSelectedItem) => {
        setSelectedItem("board");
        setIsBoardClick(true);
        setIsCardClick(false);
    };

    const onCardClick = (setSelectedItem) => {
        setSelectedItem("card");
        setIsBoardClick(false);
        setIsCardClick(true);
    };

    const onReportClick = (setSelectedItem) => {
        setSelectedItem("report");
        setIsBoardClick(false);
        setIsCardClick(false);
    };

    useEffect(() => {
        loadChickens();
    }, []);

    const style = {
        marginTop: "36px",
        fontSize: "2rem",
    };
    return (
        <div className="ui container">
            <h1 className="ui center aligned header" style={style}>
                Chicken Management System
            </h1>
            <div className="ui divider"></div>

            {/* <h1>Overview</h1>

            <Menu
                onBoardClick={onBoardClick}
                onCardClick={onCardClick}
                onReportClick={onReportClick}
            />

            {isBoardClick && (
                <ChickenTable chickens={panda} refreshChicken={loadChickens} />
            )}

            {isCardClick && <ChickenGrid chickens={panda} />} */}

            {/* {isAdd && <AddChicken />}
            <ChickenTable chickens={panda} refreshChicken={loadChickens} /> */}

            <ChickenOverviewTab
                chickens={panda}
                refreshChicken={loadChickens}
            />
        </div>
    );
}
