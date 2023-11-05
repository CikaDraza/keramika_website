import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ZoomContainer from "../ZoomContainer";
import Image from "next/image";
import { Button, Modal } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

function ChildModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Zoom</Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={{ ...style, width: 350, height: 'auto'}}>
            <Image
              width={item.width}
              height={item.height}
              src={`${item.imgPath}?w=333&auto=format`}
              srcSet={`${item.imgPath}?w=333&auto=format&dpr=2 2x`}
              alt={item.alt}
              loading="lazy"
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function ImageMasonry({ match, images, tab }) {

  return (
    <Box sx={match ? { width: 300 } : { width: 1000 }}>
      <ImageList variant="masonry" cols={match ? 1 : 3} gap={0} spacing={0}>
        {images.slice(tab, tab + 1).map((image) => image[Object.keys(image)[0]].map((item, index) => (
          <ZoomContainer key={item.id} index={index}>
            <ImageListItem>
            <Image
                width={item.width}
                height={item.height}
                src={`${item.imgPath}?w=333&auto=format`}
                srcSet={`${item.imgPath}?w=333&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              />
              <ChildModal item={item} />
            </ImageListItem>
          </ZoomContainer>
        )))}
      </ImageList>
    </Box>
  );
}