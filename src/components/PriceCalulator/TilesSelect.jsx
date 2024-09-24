import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import InputLabel from '@mui/material/InputLabel';

export default function TilesSelect({ tiles, handleChangeTiles }) {
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Pločica</InputLabel>
        <Select value={tiles} onChange={handleChangeTiles} id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>Standardne Dimenzije Pločica</em>
          </MenuItem>
          <ListSubheader>Keramičke pločice:</ListSubheader>
          <MenuItem value={1}>Male: 33 x 33 cm</MenuItem>
          <MenuItem value={2}>Srednje: 60 x 60 cm</MenuItem>
          <MenuItem value={3}>Velike: 120 x 140 cm</MenuItem>
          <ListSubheader>Granitne pločice:</ListSubheader>
          <MenuItem value={4}>Srednje: 120 x 120 cm</MenuItem>
          <MenuItem value={5}>Velike: 120 x 240 cm</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
