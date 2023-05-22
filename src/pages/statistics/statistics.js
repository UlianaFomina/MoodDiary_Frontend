import React, {useEffect, useState} from "react";
import "./statistics.css"
import {Graph} from "../../components/graph/graph";
import {getLastDays} from "../../service/statistics";

export const Statistics = () => {
    const [graph, setGraph] = useState(null);
    const [lastDays, setLastDays] = useState(2);

    const userId = sessionStorage.getItem("id");

    const fetchGraph = async (lastDays) => {
        const graphResponse = await getLastDays(userId, lastDays);
        setGraph(graphResponse)
    }

    const handleButtonClick = (value) => {
        setLastDays(value)
    };

    useEffect(() => {
        fetchGraph(lastDays)
    }, [lastDays])

    return (
        <>
            <div className="stat container-bg">
                <div className="bg">{}</div>
                <div className="stat-content content">
                    <div className="stat-graph">
                        <ButtonBlock selectedButton={lastDays} click={handleButtonClick}/>
                        <Graph graph={graph ? graph : []}/>
                    </div>
                </div>
            </div>
        </>)
};

const ButtonBlock = ({selectedButton, click}) => {
    return (
        <div className="stat-btn-wrap">
            <p className="stat-btn-text">Select the number of days for which you want to see the statistics:</p>
            <button
                className={`stat-button ${selectedButton === 3 ? 'stat-button-selected' : ''}`}
                onClick={() => click(3)}
            >
                3
            </button>
            <button
                className={`stat-button ${selectedButton === 5 ? 'stat-button-selected' : ''}`}
                onClick={() => click(5)}
            >
                5
            </button>
            <button
                className={`stat-button ${selectedButton === 7 ? 'stat-button-selected' : ''}`}
                onClick={() => click(7)}
            >
                7
            </button>
        </div>
    );
};
