import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: '0px',
    color: theme.palette.text.secondary,
}));

function BasicSelect() {
    const [channel, setChannel] = React.useState('10');

    const handleChange = (event) => {
        setChannel(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1,margin: '7px'}} size="small">

            <Select
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={channel}
                onChange={handleChange}
            >
                <MenuItem value={10}>Channel-PLN</MenuItem>
                <MenuItem value={20}>Channel-1</MenuItem>
                <MenuItem value={30}>Channel-2</MenuItem>
            </Select>
        </FormControl>
    );
}


function Header() {

    return <>
        <Stack sx={{ boxShadow: 'none', border: 0 }}
            justifyContent="flex-end"
            alignItems="flex-end" direction="row" spacing={3}>
            <Item><BasicSelect /></Item>
            <Item> <Avatar {...stringAvatar('Admin Dodds')} />
                <Link href="#" underline="none">
                    {'admin@example.com'}
                </Link></Item>
        </Stack>       
    </>
}

export default Header;