import React from "react";
import { Tab } from "semantic-ui-react";
import ChickenGrid from "./ChickenGrid";
import ChickenTable from "./ChickenTable";

const ChickenOverviewTab = ({ chickens, refreshChicken }) => {
    const panes = [
        {
            menuItem: "Card",
            render: () => <ChickenGrid chickens={chickens} />,
        },
        {
            menuItem: "Board",
            render: () => (
                <ChickenTable
                    chickens={chickens}
                    refreshChicken={refreshChicken}
                />
            ),
        },
        {
            menuItem: "Report",
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        },
    ];

    return (
        <Tab
            menu={{
                pointing: true,
                color: "teal",
                inverted: true,
                tabular: false,
            }}
            panes={panes}
        />
    );
};

export default ChickenOverviewTab;
