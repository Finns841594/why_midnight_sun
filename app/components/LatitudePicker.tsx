import { Button, ButtonGroup, Slider } from '@nextui-org/react';
import { useControls } from 'leva';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const buttonsInfo = [
  { name: 'Equator', latitude: 0 },
  { name: 'North Tropic', latitude: 23.5 },
  { name: 'Arctic Circle', latitude: 66.5 },
];

const LatitudePicker = () => {
  const [{ rotateX }, set] = useControls(() => ({
    rotateX: 0,
  }));
  const handleChangeLatitude = (value: number | number[]) => {
    let newValue = Array.isArray(value) ? value[0] : value;
    set({ rotateX: newValue });
  };
  return (
    <div className="w-full flex flex-col gap-2 mx-auto">
      <div className="h-[300px] flex flex-row">
        <Slider
          label="latitude"
          color="foreground"
          orientation="vertical"
          step={0.1}
          maxValue={90}
          minValue={0}
          value={rotateX}
          className="max-w-md"
          onChange={handleChangeLatitude}
          style={{ width: '50px', height: '300px' }}
        />
        <div className="w-3/4">
          <MapContainer
            center={[63, 0]}
            zoom={1}
            style={{
              height: '250px',
              width: '250px',
              borderRadius: '15px',
              filter: 'grayscale(100%)',
            }}
          >
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline
              positions={[
                [rotateX, -180],
                [rotateX, 180],
              ]}
              color="#12181C"
            />
          </MapContainer>
          <p className="p-2 text-xxs mt-1">
            PS: This is based on a Web Mercator projection map, which causes the
            moving of latitude line is not linear.
          </p>
        </div>
      </div>
      <div>
        <ButtonGroup className="sm">
          {buttonsInfo.map(button => (
            <Button
              key={button.name}
              variant={button.latitude === rotateX ? 'solid' : 'ghost'}
              onClick={() => handleChangeLatitude(button.latitude)}
            >
              {button.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default LatitudePicker;
