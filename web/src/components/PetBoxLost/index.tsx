import { Grid, Paper } from '@material-ui/core';
import { Fragment, useState } from 'react';
import { FaHeart, FaPaw, FaSyringe } from 'react-icons/fa';

export default function PetBox(props: any): any {
    const [animation, setAnimation] = useState(false);

    return (
        <Fragment>
            <Grid item xs={4}>
                <Paper onClick={() => setAnimation(!animation)}>
                    <div >
                        {/* <img src="" alt="Dog" /> */}
                        <div className='icon-rounded'>
                            <FaHeart />
                        </div>

                        <h3>Tóto</h3>
                        <p>Distância</p>
                    </div>
                    {/* Line division */}
                    {
                        animation && (
                            <div>
                                <div>
                                    <h5>Última vez visto</h5>
                                    <p>Reportado às 19:31</p>
                                </div>
                                {/* Map box here */}
                                {/* Line division */}

                                <div>
                                    <h4>ONG Name</h4>
                                    <p>ONG Addres</p>
                                    <p>ONG Phone</p>
                                </div>
                            </div>
                        )
                    }

                </Paper>
            </Grid>
        </Fragment>
    );
}

