import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button, Grid, OutlinedInput } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const marks = [
  {
    value: 0,
    label: '0m²',
  },
  {
    value: 1.5,
    label: '1.5m²',
  },
  {
    value: 3,
    label: '3m²',
  },
  {
    value: 4,
    label: '4m²',
  },
];

function valuetext(value) {
  return `${value}m²`;
}

export default function SurfaceWindowsSlider({ values, setValues }) {
  const addWindow = () => setValues([...values, { area: 0 }]);

  const handleUpdateWindow = (index, event) => {
    const newWindows = values.map((window, i) =>
      i === index ? { area: parseFloat(event.target.value) } : window
    );
    setValues(newWindows);
  };

  const handleBlur = (index) => {
    const newWindows = values.map((window, i) => {
      if (i === index) {
        let newValue = window.area;
        if (newValue < 0) {
          newValue = 0;
        } else if (newValue > 4) {
          newValue = 4;
        }
        return { area: newValue };
      }
      return window;
    });
    setValues(newWindows);
  };

  const handleSliderChange = (index, event, newValue) => {
    const newWindows = values.map((window, i) =>
      i === index ? { area: newValue } : window
    );
    setValues(newWindows);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={{ marginBottom: 5 }} spacing={3} alignItems="center">
        <Grid item xs={12} md={10} sx={{ mb: 3 }}>
          <span className="title-slider">Unesite broj kvadrata prozora</span>
        </Grid>
        
        {values.map((value, index) => (
          <Grid item xs={12} key={index}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={5}>
                <Slider
                  marks={marks}
                  value={value.area}
                  onChange={(event, newValue) => handleSliderChange(index, event, newValue)}
                  aria-label="Surface area slider"
                  min={0}
                  max={4}
                  step={0.01}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="on"
                />
              </Grid>
              <Grid item xs className='input-surface-window'>
                <OutlinedInput
                  value={value.area}
                  size="small"
                  onChange={(event) => handleUpdateWindow(index, event)}
                  onBlur={() => handleBlur(index)}
                  inputProps={{
                    step: 0.01,
                    min: 0,
                    max: 4,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
          
              </Grid>
              <Grid item xs className='input-surface-window'>
                <Button variant="outlined" startIcon={<AddIcon />} color='error' onClick={addWindow} sx={{fontSize: '.65rem', py: 1}}> prozor</Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
