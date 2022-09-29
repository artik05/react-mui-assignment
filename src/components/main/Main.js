import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardHeader from '@mui/material/CardHeader';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Main() {
  return (
    <div className="Main">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ backgroundColor: '#f0f4f7' }}>
          <Item sx={{ margin: '5px', backgroundColor: '#f0f4f7' }}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardHeader title="Sales" subheader="Today" sx={{ float: 'left', width: '100%', textAlign: 'left' }} />
              <CardContent>
                <TrendingUpIcon sx={{ float: 'right', textAlign: 'right' }} />
                <h1>PLN 0.00</h1>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: '#f0f4f7' }}>
          <Item sx={{ margin: '5px', backgroundColor: '#f0f4f7' }}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardHeader title="Orders" subheader="Today" sx={{ float: 'left', width: '100%', textAlign: 'left' }} />
              <CardContent>
                <AssignmentIcon sx={{ float: 'right', textAlign: 'right' }} />
                <h1>0</h1>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: '#f0f4f7' }}>
          <Item sx={{ margin: '5px', backgroundColor: '#f0f4f7' }}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <ListItem
                    key={0}
                    disableGutters
                    secondaryAction={
                      <IconButton aria-label="comment">
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={'6 orders are ready to fulfill'} />
                  </ListItem>
                  <ListItem
                    key={0}
                    disableGutters
                    secondaryAction={
                      <IconButton aria-label="comment">
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={'3 payments to capture'} />
                  </ListItem>
                  <ListItem
                    key={0}
                    disableGutters
                    secondaryAction={
                      <IconButton aria-label="comment">
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={'No products are out of stock'} />
                  </ListItem>

                </List>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: '#f0f4f7' }}>
          <Item sx={{ margin: '5px', backgroundColor: '#f0f4f7' }}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardHeader title="Top Products" sx={{ float: 'left', width: '100%', textAlign: 'left' }} />
              <CardContent>
                No Products found
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;