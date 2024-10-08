import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SurfaceAreaSlider from './SurfaceAreaSlider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PriceCalculator() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          className='calc-tab'
          sx={{ bgcolor: 'background.paper'}}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Lepljenje Pločica" {...a11yProps(0)} />
          <Tab label="Renoviranje Kupatila" {...a11yProps(1)} />
          <Tab label="Kamena Dekoracija" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className='tab-panel' value={value} index={0} dir={theme.direction}>
          <SurfaceAreaSlider tab={0} />
        </TabPanel>
        <TabPanel className='tab-panel' value={value} index={1} dir={theme.direction}>
          <SurfaceAreaSlider tab={1} />
        </TabPanel>
        <TabPanel className='tab-panel' value={value} index={2} dir={theme.direction}>
          <SurfaceAreaSlider tab={2} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
