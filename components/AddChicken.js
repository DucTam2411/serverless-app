import React from "react";

export default function AddChicken() {
    return (
        <div className="ui segment">
            <div className="ui two column stackable center aligned grid">
                <div className="column"></div>
                <div className="column">
                    <div className="ui card">
                        <div className="image">
                            <div className="ui placeholder">
                                <div className="square image"></div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="ui placeholder">
                                <div className="header">
                                    <div className="very short line"></div>
                                    <div className="medium line"></div>
                                </div>
                                <div className="paragraph">
                                    <div className="short line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui disabled primary button">
                                Add
                            </div>
                            <div className="ui disabled button">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui vertical divider">and</div>
        </div>
    );
}
