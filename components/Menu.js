import React from "react";
import { useState } from "react";

export default function Menu({ searchKey, setSearchKey, searchKeyChange }) {
    const onSearchKeyChange = (e) => {
        const { value } = e.target;
        setSearchKey(value);
        searchKeyChange(value);
    };

    return (
        <div className="ui pointing menu">
            <a className="item active">Overview</a>
            <a className="item">Messages</a>
            <a className="item">Friends</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchKey}
                            onChange={onSearchKeyChange}
                        />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
