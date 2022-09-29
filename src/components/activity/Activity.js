import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Activity() {
  const style={marginRight: 10 + 'em'};
  const index = 0;
  return (
    <List
      sx={{ width: '100%',bgcolor: 'background.paper', margin:'10px' }}
    >
        <ListItem><h3>Activity</h3></ListItem>
        <ListItem>
        <ListItemText primary="Order #11639 was placed" secondary="a days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11638 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11637 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11636 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11635 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11634 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11633 was placed" secondary="2 days ago" />
        </ListItem>
        <ListItem>
        <ListItemText primary="Order #11632 was placed" secondary="2 days ago" />
        </ListItem>
     
    </List>
  );
}
export default Activity;