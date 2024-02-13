import { Slider } from '@nextui-org/react';
import { useControls } from 'leva';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LatitudePicker = () => {
  const [{ rotateX }, set] = useControls(() => ({
    rotateX: 0,
  }));
  const handleChangeLatitude = (value: number | number[]) => {
    let newValue = Array.isArray(value) ? value[0] : value;
    set({ rotateX: newValue });
  };
  return (
    <div className="w-full h-[300px] flex flex-row">
      <Slider
        label="Latitude"
        color="foreground"
        orientation="vertical"
        step={0.1}
        maxValue={90}
        minValue={0}
        value={rotateX}
        className="max-w-md"
        onChange={handleChangeLatitude}
      />
      <div className="w-3/4">
        <MapContainer
          center={[63, 0]}
          zoom={1}
          style={{ height: '250px', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline
            positions={[
              [rotateX, -180],
              [rotateX, 180],
            ]}
          />
        </MapContainer>
        <p className="p-2 text-xxs mt-1">
          PS: Leaflet using Web Mercator projection map, which causes the moving
          of latitude line is not linear.
        </p>
      </div>
    </div>
  );
};

export default LatitudePicker;
