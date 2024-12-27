import mapMarker from "../assets/logo.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const mapStyles = `
  .leaflet-container {
    z-index: 0 !important;
  }
  .leaflet-pane {
    z-index: 0 !important;
  }
  .leaflet-top,
  .leaflet-bottom {
    z-index: 0 !important;
  }
`;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    const position = [44.5428386223394, 20.915421764320598];

    const locations = [
        {
            coords: [44.6627, 20.9346],
            name: 'Smederevo',
            address: 'Kolarski Put 330, sprat 3, Smederevo 11300',
            contact: 'Vasić Slađana - +381 64 32 040 11'
        },
        {
            coords: [44.6647, 20.9189],
            name: 'Slobodna Zona Smederevo',
            address: 'Đure Salaja 17, 11300 Smederevo',
            contact: 'Zdravković Goca - +381 64 22 495 72'
        },
        {
            coords: [44.4041, 20.6811],
            name: 'Mladenovac',
            address: 'Senaja, Senajska 2, 11235 Mali Požarevac',
            contact: 'Đurić Mirjana - +381 64 82 549 82'
        },
        {
            coords: [44.3659, 20.9581],
            name: 'Smederevska Palanka',
            address: 'Jozefa Šulca 22 (Carinski terminal)',
            contact: 'Vuletić Jelica - +381 64 64 854 06'
        }
    ];

    return (
        <>
            <style>{mapStyles}</style>
            <div className="w-full h-[500px]">
                <MapContainer
                    center={position}
                    zoom={9}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((location, index) => (
                        <Marker key={index} position={location.coords}>
                            <Popup>
                                <div className="flex flex-col items-center">
                                    <img src={mapMarker} alt="Map Marker" className="w-28" />
                                    <p className="font-roboto">{location.name}</p>
                                    <p className="font-roboto">{location.address}</p>
                                    <p className="font-roboto">{location.contact}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    )
}

export default Map;