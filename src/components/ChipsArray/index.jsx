import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
import Avatar from '@mui/material/Avatar';

const Input = styled('input')({
  display: 'none',
});

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ selectedFile, setImgFile }) {
  const [chipData, setChipData] = React.useState(selectedFile);

  React.useEffect(() => {
    setChipData(selectedFile);
  }, [selectedFile])
  

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip?.image?.name !== chipToDelete?.image?.name));
    setImgFile((prevImgFile) => prevImgFile.filter((item) => item?.image?.name !== chipToDelete?.image?.name));
    console.log(chipToDelete);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        listStyle: 'none',
        pt: 3,
        m: 0,
      }}
      component="ul"
    >

        {
          chipData.map(item => (
            item.image === null ?
            null
            :
            <ListItem key={item?.image?.lastModified} sx={{display: 'flex', alignItems: 'center'}}>
              <Chip
                avatar={<Avatar alt={item?.image?.name} src={item?.imageUrl} />}
                label={item?.image?.name}
                onDelete={handleDelete(item)}
              />
              <Typography sx={{pl: 3}}>{`veličina slike: ${item && Math.ceil(item?.image?.size/1000) + "kb"}`}</Typography>
            </ListItem>
          ))
        }
    </Paper>
  );
}
