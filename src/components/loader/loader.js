import {ClockLoader} from "react-spinners";
import React from "react";

const override = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    zIndex: "100"
};

export const Loader = ({loading}) => {
    return (
        <ClockLoader
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}