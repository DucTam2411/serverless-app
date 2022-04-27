import React from "react";
import { Image } from "semantic-ui-react";

export default function ChickenCard({ chicken }) {
    const cardStyle = {
        marginTop: "10px",
    };

    let randomInt = Math.floor(Math.random() * 1000);

    const getChickenImage = () => {
        if (chicken.imageUrl) {
            return (
                <Image
                    className="ui bordered image"
                    alt="chicken image"
                    src={chicken.imageUrl}
                />
            );
        }
        return (
            <Image
                className="ui bordered image"
                alt="chicken image"
                src="https://i.pinimg.com/564x/d4/18/67/d418674b7da8d31e310a91e599626d7d.jpg"
            />
        );
    };

    return (
        <div className="four wide column">
            <div className="ui card" style={cardStyle}>
                <div className="image">{getChickenImage()}</div>
                <div className="content">
                    <a className="header">
                        {chicken.name} {"("} {chicken.marketId} {")"}
                    </a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">{chicken.description}</div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="circle icon"></i>
                        Quantity {chicken.number}
                    </a>
                </div>
            </div>
        </div>
    );
}
