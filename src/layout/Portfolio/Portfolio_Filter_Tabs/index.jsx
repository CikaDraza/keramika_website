import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ImageMasonry from '../../../components/Image_Masonry';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%' }}>
          {children}
        </Box>
      )}
    </div>
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="wrapper">
      <Box className="tab-box" sx={match ? { maxWidth: 300 } : { maxWidth: 1000 }}>
        <Tabs variant="scrollable" scrollButtons="auto" className="tab-box__tabs" value={value} onChange={handleChange} aria-label="scrollable">
          <Tab label="sve" {...a11yProps(0)} />
          <Tab label="kupatila" {...a11yProps(1)} />
          <Tab label="kuhinje" {...a11yProps(2)} />
          <Tab label="sobe" {...a11yProps(3)} />
          <Tab label="stepeništa i terase" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel className="tab-panel" value={value} index={0}>
        <ImageMasonry tab={0} images={portfolioImagesProps.images} match={match}/>
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