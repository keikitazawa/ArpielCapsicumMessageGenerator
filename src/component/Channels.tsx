import React, { useContext } from "react";
import Location from "./Location";

import { Context } from "./Messages";

import { Location as LocationType } from "../entity/LocationEntity";

type ParamType = {
    // Region Index
    index: number,
}

export const Channels = (params: ParamType) => {

    const { positions } = useContext(Context);

    // index順にソート
    const regionLocations = positions.regions[params.index].locations.sort((a, b) => a.index - b.index);

    // ここからregions.locationsの中身すべてを設定
    const locations: JSX.Element[] = [];
    // Region内チャンネルすべてにlocationを設定する
    for (let i = 0; i < regionLocations.length; i++){
        const locationData: LocationType = regionLocations[i];
        locations.push(
            <Location location={locationData} />
        );
    }

    return (
        <div className="row">
            {locations}
        </div>
    )
}