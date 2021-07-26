import { Grid, Paper } from '@material-ui/core';
import { Outlet } from 'react-router';
import { PetBox, PetBoxLost } from '../../components';

export default function Alerts(): any {

    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <PetBox />
                <PetBox />
                <PetBox />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <PetBoxLost />
                <PetBoxLost />
                <PetBoxLost />
            </Grid> 
        </Grid>
    )
}