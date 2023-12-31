import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ImageMasonry from '../../../components/Image_Masonry';
import Slider from "react-slick";
import Image from 'next/image';
import { Typography, useMediaQuery } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      sx={{width: '100%'}}
      {...other}
    >
      {value === index && (
        <Box className={`tab-${index}`} sx={{ p: 1, width: '100%' }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function FilterTabs(props) {
  const { match, portfolioFilterTabsProps, portfolioImagesProps } = props;
  const desktop = useMediaQuery('(min-width: 1280px)');
  const mobile = useMediaQuery('(max-width: 640px)');
  const [value, setValue] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: mobile ? 1 : desktop ? 3 : 2,
    slidesToScroll: mobile ? 1 : 2
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="wrapper">
      <Box className="tab-box" sx={match ? { maxWidth: 300 } : { maxWidth: 1280 }}>
        <Tabs variant="scrollable" scrollButtons="auto" className="tab-box__tabs" value={value} onChange={handleChange} aria-label="scrollable">
          <Tab label="sve" {...a11yProps(0)} />
          <Tab label="kupatila" {...a11yProps(1)} />
          <Tab label="kuhinje" {...a11yProps(2)} />
          <Tab label="sobe" {...a11yProps(3)} />
          <Tab label="stepeništa i terase" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel className="tab-panel" value={value} index={0}>
        <Typography component="label" variant='h6' className='main-bg' sx={{display: 'flex', justifyContent: 'center', width: '100px', borderRadius: '5px', ml: 1}}>Novo</Typography>
        <Slider {...settings}>
          {portfolioImagesProps?.images.slice(0, 1).map((image) => image[Object.keys(image)[0]].slice(0, 6).map((item, index) => (
            <Box key={index} sx={{width: '100%', height: '300px', maxHeight: '300px', p: 1, position: 'relative', overflow: 'hidden'}}>
              <Image
                width={item.width}
                height={item.height}
                src={`${item.imgPath}?w=333&auto=format`}
                srcSet={`${item.imgPath}?w=333&auto=format&dpr=2 2x`}
                alt={item.alt}
                priority
                layout="responsive"
              />
            </Box>
          )))}
        </Slider>
        <Box sx={{py: 5}}></Box>
        <ImageMasonry tab={0} images={portfolioImagesProps.images} match={match} />
      </TabPanel>
      <TabPanel className="tab-panel" value={value} index={1}>
        <ImageMasonry tab={1} images={portfolioImagesProps.images} match={match}/>
      </TabPanel>
      <TabPanel className="tab-panel" value={value} index={2}>
        <ImageMasonry tab={2} images={portfolioImagesProps.images} match={match}/>
      </TabPanel>
      <TabPanel className="tab-panel" value={value} index={3}>
        <ImageMasonry tab={3} images={portfolioImagesProps.images} match={match}/>
      </TabPanel>
      <TabPanel className="tab-panel" value={value} index={4}>
        <ImageMasonry tab={4} images={portfolioImagesProps.images} match={match}/>
      </TabPanel>
    </Box>
  );
}