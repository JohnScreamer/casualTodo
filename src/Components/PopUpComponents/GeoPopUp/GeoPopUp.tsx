import React, { FC } from "react";
type TypeGeoPopUp = {
    geo: {
        lat: number;
        lng: number;
    };
};
const GeoPopUp: FC<TypeGeoPopUp> = ({ geo }) => {
    return (
        <div>
            <div>Position Y: {geo.lat}</div>
            <div>Position X: {geo.lng}</div>
        </div>
    );
};

export default GeoPopUp;
