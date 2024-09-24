import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormHelperText, Grid, OutlinedInput } from '@mui/material';
import PriceTable from './PriceTable';
import RoomSelect from './RoomSelect';
import SurfaceDoorSlider from './SurfaceDoorSlider';
import SurfaceWindowsSlider from './SurfaceWindowsSlider';
import TilesSelect from './TilesSelect';

const marks = [
  {
    value: 0,
    label: '0m²',
  },
  {
    value: 15,
    label: '15m²',
  },
  {
    value: 30,
    label: '30m²',
  },
  {
    value: 100,
    label: '100m²',
  },
];

function valuetext(value) {
  return `${value}m²`;
}

export default function SurfaceAreaSlider({ tab }) {
  const [value, setValue] = React.useState(0);
  const [valueTwo, setValueTwo] = React.useState(0);
  const [valueThree, setValueThree] = React.useState(0);
  const [room, setRoom] = React.useState('');
  const [tiles, setTiles] = React.useState('');
  const [tilePrice, setTilePrice] = React.useState(15);
  const [tilePackageValue, setTilePackageValue] = React.useState(1.44);
  const [adhesivePrice, setAdhesivePrice] = React.useState(10);
  const [roomHeight, setRoomHeight] = React.useState(2.4);
  const [doorValue, setDoorValue] = React.useState(0);
  const [numDoors, setNumDoors] = React.useState(0);
  const [windowValues, setWindowValues] = React.useState([{ area: 0 }]);

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangeTiles = (event) => {
    const selectedValue = event.target.value;
    setTiles(selectedValue);
    
    if (selectedValue === 1 || selectedValue === 2) { // Male/Srednje pločice
      setTilePrice(15);
      setTilePackageValue(1.44);
      setAdhesivePrice(10);
    } else if (selectedValue === 3) { // Velike pločice
      setTilePrice(15);
      setTilePackageValue(1.68);
      setAdhesivePrice(10);
    } else if (selectedValue === 4) { // Granitne pločice
      setTilePrice(16); // Veća cena lepljenja za granit
      setTilePackageValue(1.68);
      setAdhesivePrice(12); // Cena lepka za granitne pločice
    }
  };
  

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    if(value > 0) { 
    };
    setValueTwo(event.target.value === '' ? '' : Number(event.target.value));
    if(valueTwo > 0) { 
    };
    setValueThree(event.target.value === '' ? '' : Number(event.target.value));
    if(valueThree > 0) { 
    };
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
    if (valueTwo < 0) {
      setValueTwo(0);
    } else if (valueTwo > 100) {
      setValueTwo(100);
    }
    if (valueThree < 0) {
      setValueThree(0);
    } else if (valueThree > 100) {
      setValueThree(100);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setValue(marks.value = newValue);
    setValueTwo(marks.value = newValue);
    setValueThree(marks.value = newValue);
  };

  const calculateTileArea = () => {
    // Površina zidova bez vrata i prozora
    const wallArea = value * roomHeight;

    // Površina vrata
    const doorDeduction = doorValue * numDoors * 0.75;

    // Površina prozora sa koeficijentom umanjenja
    const windowDeduction = windowValues.reduce((total, window) => {
      // Ako je kvadratura prozora manja od 0.5m2, ne oduzimamo
      return window.area > 0.5 ? total + window.area * 0.7 : total;
    }, 0);

    // Izračunavanje konačne površine za lepljenje pločica
    const tileArea = wallArea - doorDeduction - windowDeduction;

    return tileArea > 0 ? parseFloat(tileArea.toFixed(2)) : 0; // Ako je manje od nule, vraćamo 0
  };

  return (
    <Box sx={{ width: '100%' }}>
      {
        tab !== 1 &&
        <Grid sx={{ marginBottom: 5 }} container spacing={3}>
          <Grid item xs={12} md={6} sx={{mt: 3, mb: 3, pt: 0}}>
            <span className="title-slider">Izaberite tip pločice</span>
          </Grid>
          <Grid item xs className='select-rooms'>
            <TilesSelect tiles={tiles} handleChangeTiles={handleChangeTiles}/>
          </Grid>
        </Grid>
      }
      <Grid container sx={{ marginBottom: 5 }} spacing={3} alignItems="center">
        <Grid item xs={12} sx={{mb: 3}}>
          <span className="title-slider">Unesite broj kvadrata prostorije</span>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={5}>
          <Slider
            marks={marks}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={5}
            valueLabelDisplay="on"
          />
        </Grid>
        <Grid item xs className='input-surface'>
          <FormHelperText>
            kvadrat prostorije
          </FormHelperText>
          <OutlinedInput
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs className='input-room-height'>
          <FormHelperText>
            visina prostorije
          </FormHelperText>
          <OutlinedInput
            value={roomHeight}
            size="small"
            onChange={(e) => setRoomHeight(parseFloat(e.target.value) || 2.4)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <Box>
      {
        tab === 0 &&
        <Grid item xs>
          <SurfaceDoorSlider value={doorValue} numDoors={numDoors} setValue={setDoorValue} setNumDoors={setNumDoors} />
        </Grid>
      }
      {
        tab === 0 &&
        <Grid item xs>
          <SurfaceWindowsSlider values={windowValues} setValues={setWindowValues}  />
        </Grid>
      }
      {
        tab !== 1 &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{mt: 3, mb: 3, pt: 0}}>
            <span className="title-slider">Izaberite prostoriju</span>
          </Grid>
          <Grid item xs className='select-rooms'>
            <RoomSelect room={room} handleChangeRoom={handleChangeRoom}/>
          </Grid>
        </Grid>
      }
      {
        tab === 0 &&
        <Box>
          {
            value > 0 && room !== '' &&
            <PriceTable surfaceValue={calculateTileArea()} room={room} tab={tab} tilePackageValue={tilePackageValue} tilePrice={tilePrice} adhesivePrice={adhesivePrice} />
          }
        </Box>
      }
      {
        tab === 1 &&
        <Box>
          {
            valueTwo > 0 &&
            <PriceTable surfaceValue={valueTwo} room={'kupatilo'} tab={tab} />
          }
        </Box>
      }
      {
        tab === 2 &&
        <Box>
          {
            valueThree > 0 && room !== '' &&
            <PriceTable surfaceValue={valueThree} room={room} tab={tab} />
          }
        </Box>
      }
      </Box>
    </Box>
  );
}
