import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ZoomContainer from "../ZoomContainer";
import Image from "next/image";
import { Button, Modal, useMediaQuery } from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Masonry from '@mui/lab/Masonry';
import Zoom from "@mui/material/Zoom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minWidth: 300,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

function ChildModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const match = useMediaQuery('(max-width: 768px)');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button sx={{mt: -8}} onClick={handleOpen}>
        <ZoomInIcon sx={{fill: 'white'}} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{zIndex: 99999}}
      >
        <Box sx={{ ...style}}>
          <Image
            width={item.width}
            height={item.height}
            src={`${item.imgPath}?w=333&auto=format&dpr=2 2x`}
            srcSet={`${item.imgPath}?w=333&auto=format&dpr=2 2x`}
            alt={item.alt}
            loading="lazy"
            layout="responsive"
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function ImageMasonry({ match, images, tab }) {

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
      {images.slice(tab, tab + 1).map((image) => image[Object.keys(image)[0]].map((item, index) => (
        <Zoom key={item.id} in={true} index={index}>
          <Box sx={{position: 'relative', width: '100%', maxWidth: '100%',
            overflow: 'hidden'}}>
            <Image
              src={item.imgPath}
              alt={item.alt}
              width={item.width}
              height={item.height}
              layout="responsive"
              priority
            />
            <ChildModal item={item} />
          </Box>
        </Zoom>
      )))}
    </Masonry>
  );
}