import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicSelect from '../atoms/Select';
import {Link, TextField} from '@mui/material';
import { Button, FormControlLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HorizontalNonLinearStepper from '../molecules/Stepper';
import RowRadioButtonsGroup from '../molecules/RadioButtonsGroup';


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
    <Box sx={{ flexGrow: 1, backgroundColor: '#f2f2f2'}} >
      <Grid container spacing={4} sx={{margin: '0px'}}>
        <Grid item xs={12} md={3}  sx={{paddingRight: '32px'}} >
        <Typography variant='h5' gutterBottom>Create a company account</Typography>
          <HorizontalNonLinearStepper />
        </Grid>

        <Grid item  xs={12} md={9} sx={{ backgroundColor: '#ffffff', borderTopLeftRadius: '40px', paddingRight: '32px'}}>
          <Box sx={{justifyContent: 'center', display: 'grid', maxWidth: '500px', margin: '0 auto' }}>
          <Typography variant='h5' gutterBottom>Register your company for free</Typography>
          <Typography variant='body1' gutterBottom>Start your registration for your account and gain access to select digital services and applications Cummins has to offer. Then, look out for an email with next steps to complete the process.</Typography>
          <FormControl>
            
              <Typography variant='body1'>Company Name</Typography> 
                <TextField id="id-1" fullWidth={true} variant='filled'/>
            
                <Typography variant='body1'>Market
                <Tooltip title="Select the market you are interested in">
                  <IconButton>
                    <HelpOutlineIcon fontSize='small'/>
                  </IconButton>
                </Tooltip>
              </Typography>
                <BasicSelect defaultText='Select' id='market-id' options={options} variant='filled'/>
                <Typography variant='body1'>Address</Typography> 
                <Typography variant='body1'> </Typography> 
                <TextField id="id-2" fullWidth={true} variant='filled'/>
            
                <Typography variant='body1'>Country</Typography> 
                <BasicSelect defaultText='Select' id='market-id' options={options} variant='filled'/>
            
                <Typography variant='body1'>City</Typography> 
                <TextField id="id-3" fullWidth={true} variant='filled'/>
                <Typography variant='body1'>State</Typography> 
                <BasicSelect defaultText='Select' id='market-id' options={options} variant='filled'/>
                <Typography variant='body1'>Zip</Typography> 
                <TextField id="id-3" fullWidth={true} variant='filled'/>

                <RowRadioButtonsGroup />
            
                <Typography variant='body2'>Already have an account? <Link href="#">Sign in</Link></Typography> 

                <Button disableRipple={true} variant='contained' fullWidth={true}>Submit</Button>
            
           
       </FormControl>
           </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
}