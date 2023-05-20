import {ClockLoader} from "react-spinners";
import React from "react";

const override = {
    margin: "0 auto",
    position: "absolute",
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