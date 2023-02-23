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
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import { AddBox } from '@mui/icons-material';

import FamilyRecord from './FamilyRecord';

function BeneficiaryDetails() {

    const options = [
        { label: 'One', id: 1 },
        { label: 'Two', id: 2 },
    ];

    const [value, setValue] = React.useState(null);
    return (
        <>
            {/* <Header /> */}

            <Card sx={{ mt: 2, bgcolor:'#F5F5F5'}}>
                <CardContent>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: 20, margin: 2 }} color="text.secondary" gutterBottom>
                            Family Members Details
                        </Typography>
                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Add Beneficiary
                        </Button>

                    </Box>


                    <Grid>
                      <FamilyRecord/>

                    </Grid>

                    <Grid item mt={2} columnSpacing={2} sx= {{marginLeft : 25}} >

                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Save
                        </Button>
                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Reset
                        </Button>
                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Submit Application
                        </Button>
                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Add Attachments
                        </Button>
                        <Button sx={{ minWidth: 100, ml: 1, marginLeft: 'auto' }} variant="contained">
                            Print Application
                        </Button>


                    </Grid>



                </CardContent>
            </Card>




        </>
    );
}

export default BeneficiaryDetails;
