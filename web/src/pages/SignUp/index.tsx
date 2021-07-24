import { TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, MenuButton } from '../../components';
import './index.css'

const SignUp = (): any => {
    const navigate = useNavigate();
    const [isOng, setIsOng] = useState(false)

    function submitAndRedirect(): void {
        navigate('/');
    }

    return (
        <div>
            <form >
                <div className='form' >
                    <TextField className='textfield' label="Nome" />
                    <TextField className='textfield' label="Email" />
                    <TextField className='textfield' label="Senha" />
                    <TextField className='textfield' label="Telefone" />
                    <div className='menu-buttons'>
                        <MenuButton>Cidade</MenuButton>
                        <MenuButton>Estado</MenuButton>
                    </div>

                    <div className='radio-group'>
                        <FormControl component='fieldset' >
                            <FormLabel component='legend'>Você é uma ong?</FormLabel>
                            <RadioGroup aria-label='isOng'
                                name='isOng'
                                value={isOng}
                                onChange={() => setIsOng(!isOng)}
                                row
                            >
                                <FormControlLabel value={true} control={<Radio />} label="Male" />
                                <FormControlLabel value={false} control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                    </div>


                    <Button type="submit" onClick={submitAndRedirect}>Cadastrar</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;