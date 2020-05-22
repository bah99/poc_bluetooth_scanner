import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';

// Set your mapbox access token here
//@see(https://mapbox.com/)
const MAPBOX_ACCESS_TOKEN = 'MAPBOX_ACCESS_TOKEN';

// Viewport settings
const viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
};

// Data to be used by the LineLayer
// predicted risky zone locations (data should obtebed from the back by @anas)  
const data = [{ sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }];

// DeckGL react component
// render datavisualiser in a map (zone)
class riskyZone extends React.Component {
    render() {
        const layers = [
            new LineLayer({ id: 'line-layer', data })
        ];

        return (
            <DeckGL
                initialViewState={initialViewState}
                controller={true}
                layers={layers}
            >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>
        );
    }
}