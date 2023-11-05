import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RoomSelect({ room, handleChangeRoom}) {
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={room}
          onChange={handleChangeRoom}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Izaberi prostoriju</em>
          </MenuItem>
          <MenuItem value={'kupatilo'}>Kupatilo</MenuItem>
          <MenuItem value={'kuhinja'}>Kuhinja</MenuItem>
          <MenuItem value={'soba'}>Soba</MenuItem>
          <MenuItem value={'terasa-stepeniste'}>Terasa, Stepeniste</MenuItem>
        </Select>
        <FormHelperText>
          cena moze da bude razlicita u zavisnosti od porstorije
        </FormHelperText>
      </FormControl>
    </div>
  );
}
