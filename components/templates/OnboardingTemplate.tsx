import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicButton from '../atoms/Button';
import BasicSelect from '../atoms/Select';
import BasicTextField from '../atoms/TextField';
import { Button, FormControlLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const options = [
  {value: 10, label: 'Ten'},
  {value: 20, label: 'Twenty'},
  {value: 30, label: 'Thirty'},
  {value: 40, label: 'Forty'},
]


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OnboardingTemplate() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={5}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={7} sx={{alignContent: 'center'}}>
    
      <Typography variant='h5'>Register your company for free</Typography>
      <Typography variant='body1'>Start your registration for your account and gain access to select digital services and applications Cummins has to offer. Then, look out for an email with next steps to complete the process.</Typography>
          <FormControl>
            
              <Typography variant='body1'>Market
                <Tooltip title="Select the market you are interested in">
                  <IconButton>
                    <HelpOutlineIcon fontSize='small'/>
                  </IconButton>
                </Tooltip>
              </Typography> 
                <BasicTextField id="id-1" fullWidth={true}/>
            
             
                <BasicSelect defaultText='Select' id='market-id' options={options}/>
            
             
                <BasicTextField id="id-2" fullWidth={true}/>
            
             
                <BasicSelect defaultText='Select' id='market-id' options={options}/>
            
             
                <BasicTextField id="id-3" fullWidth={true}/>
            
                <BasicSelect defaultText='Select' id='market-id' options={options}/>
            
                <BasicTextField id="id-3" fullWidth={true}/>
            
             
                <Button disableRipple={true} variant='contained' fullWidth={true}>Submit</Button>
            
           
       </FormControl>
   
        </Grid>
      
      </Grid>
    </Box>
  );
}