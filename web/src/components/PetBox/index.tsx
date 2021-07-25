import { Grid, Paper } from '@material-ui/core';
import { Fragment, useState } from 'react';
import { FaHeart, FaPaw, FaSyringe } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';
import { GiMedicinePills } from 'react-icons/gi';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const PetBox = (props: any): any => {
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
                    {
                        animation && (
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Proin posuere quis elit ac tincidunt. Vestibulum quis commodo quam,
                                    ac bibendum sapien. Donec nec nisi sit amet felis varius tincidunt.
                                </p>
                                <div>
                                    <div className='icon-container'>
                                        <FaPaw />
                                        <label>Castrado: <AiOutlineCheck /></label>
                                    </div>
                                    <div className='icon-container'>
                                        <FaSyringe />
                                        <label>Vacinado: <AiOutlineClose /></label>
                                    </div>
                                    <div className='icon-container'>
                                        <HiChip />
                                        <label>Chipado: <AiOutlineCheck /></label>
                                    </div>
                                    <div className='icon-container'>
                                        <GiMedicinePills />
                                        <label>Vermifugado: <AiOutlineClose /></label>
                                    </div>
                                </div>
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

export default PetBox;