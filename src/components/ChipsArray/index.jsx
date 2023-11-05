import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import Avatar from '@mui/material/Avatar';

const Input = styled('input')({
  display: 'none',
});

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({selectedFile}) {
  const [chipData, setChipData] = React.useState([]);
  // console.log(selectedFile.lastModified);
  // console.log(selectedFile);

  // React.useEffect(() => {
  //   setChipData(selectedFile)
  // }, [selectedFile])
   

  // const handleDelete = (chipToDelete) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.selectedFile.lastModified !== chipToDelete.lastModified));
  // };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >

        {selectedFile &&
          <ListItem key={selectedFile.lastModified}>
            {/* <Chip
              avatar={<Avatar alt={selectedFile.name} src={selectedFile.name} />}
              label={selectedFile && selectedFile.size/1000 + "kb"}
              
            /> */}
            <Chip label={`Slika: ${selectedFile.name}`} /> 
            <Chip label={`veličina slike: ${selectedFile && selectedFile.size/1000 + "kb"}`} />
          </ListItem>}
    </Paper>
  );
}
