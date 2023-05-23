import React, {useEffect, useState} from "react";
import "./statistics.css"
import {Graph} from "../../components/graph/graph";
import {getLastDays} from "../../service/statistics";
import {Loader} from "../../components/loader/loader";

export const Statistics = () => {
    const [graph, setGraph] = useState(null);
    const [lastDays, setLastDays] = useState(3);
    const [loading, setLoading] = useState(false);

    const userId = sessionStorage.getItem("id");

    const fetchGraph = async (lastDays) => {
        setLoading(true)
        getLastDays(userId, lastDays)
            .then(response => {
                setGraph(response)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
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
                        {graph ? graph.moodPhrase : null}
                        <ButtonBlock selectedButton={lastDays} click={handleButtonClick}/>
                        <Graph graph={graph ? graph.statistics : []}/>
                        <Loader loading={loading}/>
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
