import React from "react";
import { useState } from "react";

export default function Menu({ onBoardClick, onCardClick, onReportClick }) {
    const [selectedItem, setSelectedItem] = useState("card");
    return (
        <div className="ui pointing menu">
            <a
                className={`item ${selectedItem == "card" ? "active" : ""}`}
                onClick={() => onCardClick(setSelectedItem)}
            >
                Card
            </a>
            <a
                className={`item ${selectedItem == "board" ? "active" : ""}`}
                onClick={() => onBoardClick(setSelectedItem)}
            >
                Board
            </a>
            <a
                className={`item ${selectedItem == "report" ? "active" : ""}`}
                onClick={() => onReportClick(setSelectedItem)}
            >
                Report
            </a>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
