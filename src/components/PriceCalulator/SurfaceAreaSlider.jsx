import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid, OutlinedInput } from '@mui/material';
import PriceTable from './PriceTable';
import RoomSelect from './RoomSelect';

const marks = [
  {
    value: 0,
    label: '0m2',
  },
  {
    value: 15,
    label: '15m2',
  },
  {
    value: 30,
    label: '30m2',
  },
  {
    value: 100,
    label: '100m2',
  },
];

function valuetext(value) {
  return `${value}m2`;
}

export default function SurfaceAreaSlider() {
  const [value, setValue] = React.useState(0);
  const [room, setRoom] = React.useState('');

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    if(value > 0) { 
    };
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setValue(marks.value = newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={{ marginBottom: 5 }} spacing={3} alignItems="center">
          <Grid item xs={12} sx={{mb: 3}}>
            <span className="tite-slider">Unesite broj kvadrata prostorije</span>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={6}>
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
          <OutlinedInput
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
        />
          </Grid>
          <Grid item xs={6} sx={{mt: 3, mb: 3, pt: 0}}>
            <span className="tite-slider">Izaberite prostoriju</span>
          </Grid>
          <Grid item xs className='select-rooms'>
            <RoomSelect room={room} handleChangeRoom={handleChangeRoom}/>
          </Grid>
      </Grid>
      {
        value > 0 &&
          <PriceTable surfaceValue={value} room={room} />
      }
     
    </Box>
  );
}
