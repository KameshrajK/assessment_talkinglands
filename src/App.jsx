import React, { Component, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

class App extends Component {
  state = {
    points: [],
  };

  componentDidMount() {
    // Fetch data from a spatial API (replace with your API endpoint)
    axios.get("https://your-spatial-api-endpoint.com/data").then((response) => {
      this.setState({ points: response.data });
    });
  }

  render() {
    const { points } = this.state;

    return (
      <MapContainer 
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((point) => (
          <Marker
            key={point.id}
            position={[point.latitude, point.longitude]}
          >
            <Popup>
              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default App;


