import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormHelperText, Grid, OutlinedInput } from '@mui/material';

const marks = [
  {
    value: 0,
    label: '0m²',
  },
  {
    value: 1.6,
    label: '1.6m²',
  },
  {
    value: 2.4,
    label: '2.4m²',
  },
  {
    value: 3,
    label: '3m²',
  },
  {
    value: 3.70,
    label: '3.70m²',
  },
  {
    value: 6,
    label: '6m²',
  },
];

function valuetext(value) {
  return `${value}m²`;
}

export default function SurfaceDoorSlider({ value, numDoors, setValue, setNumDoors }) {
  
  const handleInputChange = (event) => {
    const newValue = event.target.doorArea === '' ? '' : Number(event.target.value);
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 6) {
      setValue(6);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={{ marginBottom: 5 }} spacing={3} alignItems="center">
        <Grid item xs={12} sx={{mb: 3}}>
          <span className="title-slider">Unesite broj kvadrata svih vrata</span>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={5}>
          <Slider
            marks={marks}
            value={value}
            onChange={handleSliderChange}
            aria-label="Surface area slider"
            min={0}
            max={6}
            step={0.1}
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
          />
        </Grid>
        <Grid item xs className='input-surface'>
          <FormHelperText>
            kvadrat vrata
          </FormHelperText>
          <OutlinedInput
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.1,
              min: 2.4,
              max: 6,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs className='input-surface-door'>
          <FormHelperText>
            broj vrata
          </FormHelperText>
          <OutlinedInput
            value={numDoors}
            size="small"
            onChange={(e) => setNumDoors(parseInt(e.target.value))}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 99,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}