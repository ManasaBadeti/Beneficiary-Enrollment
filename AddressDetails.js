import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
import List from '@mui/material/List';
import { ListItem } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import BeneficiaryDetails from './BeneficiaryDetails';

function AddressDetails() {

    const options = [
        { label: 'One', id: 1 },
        { label: 'Two', id: 2 },
    ];

    const [value, setValue] = React.useState(null);
    return (
        <>
            {/* <Header /> */}

            <Card sx={{ mt: 2 , ml:2}}>

                <CardContent sx={{bgcolor:'#F5F5F5'}}>

                <Typography sx={{ fontSize: 20, marginBottom:2, textAlign:'center',bgcolor:'#2196f3'}} color="white" gutterBottom>
                        Address Details
                    </Typography>
                    <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={16} sm={12} md={12} lg={12}>
                            <Grid container direction="row" rowSpacing={2} columnSpacing={2} justify="flex-end" alignItems="center">
                                <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
                                    <Grid item xs={16} sm={4} md={4} lg={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="House Number"
                                            name="email"
                                            autoComplete="email"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Street"
                                            name="email"
                                            autoComplete="email"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 2 }}
                                            renderInput={(params) => <TextField {...params} label="State" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 2 }}
                                            renderInput={(params) => <TextField {...params} label="District" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 2 }}
                                            renderInput={(params) => <TextField {...params} label="Mandal/Municipality" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 2 }}
                                            renderInput={(params) => <TextField {...params} label="Mandal" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Autocomplete
                                            disablePortal
                                            onChange={(event, value) => console.log(value)}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            id="combo-box-demo"
                                            options={options}
                                            sx={{ width: '100%', mt: 2 }}
                                            renderInput={(params) => <TextField {...params} label="City/Town/Village" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Pincode"
                                            name="email"
                                            autoComplete="email"
                                            size="small"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="mobile"
                                            label="Mobile No."
                                            name="mobile"
                                            autoComplete="mobile"
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </CardContent>

            </Card>

          
             
        </>
    );
}

export default AddressDetails;
