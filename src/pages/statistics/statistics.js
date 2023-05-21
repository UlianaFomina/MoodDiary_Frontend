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
                    <ButtonBlock selectedButton={lastDays} click={handleButtonClick}/>
                    <Graph graph={graph ? graph : []}/>
                </div>
            </div>
        </>)
};

const ButtonBlock = ({selectedButton, click}) => {
    return (
        <div>
            <button
                className={`button ${selectedButton === 2 ? 'selected' : ''}`}
                onClick={() => click(2)}
            >
                2
            </button>
            <button
                className={`button ${selectedButton === 3 ? 'selected' : ''}`}
                onClick={() => click(3)}
            >
                3
            </button>
            <button
                className={`button ${selectedButton === 5 ? 'selected' : ''}`}
                onClick={() => click(5)}
            >
                5
            </button>
        </div>
    );
};
