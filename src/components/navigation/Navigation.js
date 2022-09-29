import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HouseIcon from '@mui/icons-material/House';
import Main from '../main/Main';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PagesIcon from '@mui/icons-material/Pages';
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        variant='fullWidth'
        onChange={handleChange}
        aria-label="Vertical tabs example"
        indicatorColor="#ffffff"
        sx={{ border: 0, backgroundColor: '#f0f4f7', fontWeight: 'bold' }}
      >
           <Tab label="" />
         <Tab label="Home" icon={<HouseIcon />} iconPosition="start" {...a11yProps(0)} />
        <Tab label="Catalog" icon={<BusinessCenterIcon />} iconPosition="start" {...a11yProps(1)} />
        <Tab label="Orders" icon={<ShoppingCartIcon />} iconPosition="start" {...a11yProps(2)} />
        <Tab label="Customers" icon={<AccountCircleIcon />} iconPosition="start" {...a11yProps(3)} />
        <Tab label="Discounts" icon={<LocalOfferIcon />} iconPosition="start" {...a11yProps(4)} />
        <Tab label="Pages" icon={<PagesIcon />} iconPosition="start" {...a11yProps(5)} />
        <Tab label="Apps" icon={<AppsIcon />} iconPosition="start" {...a11yProps(6)} />
        <Tab label="Translations" icon={<LanguageIcon />} iconPosition="start" {...a11yProps(7)} />
        <Tab label="Configuration" icon={<SettingsIcon />} iconPosition="start" {...a11yProps(8)} />
        
      </Tabs>
      <TabPanel value={value} index={1} sx={{ border: 0, backgroundColor: '#f0f4f7' }}>
        <Box sx={{ border: 0, backgroundColor: '#f0f4f7', textAlign: 'left' }}>
          <h2>Hello there, admin@example.com</h2>
          <p>Here is some infomation we gathered about your store</p>
        </Box>
        <Main />
      </TabPanel>
    </Box>
  );
}
