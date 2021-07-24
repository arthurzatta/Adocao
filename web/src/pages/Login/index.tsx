import { TextField } from "@material-ui/core";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from '../../components';
import './index.css';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className='formContainer'>
            <form>
                <div className='textFieldContainer'>
                    <TextField className='textfield' label="Email" />
                    <TextField className='textfield' label="Password" />
                    <Button className='btn-submit' type='submit' >Entrar</Button>
                    <Button onClick={() => navigate('signUp')} >Cadastrar</Button>
                </div>
            </form>
            <Outlet />
        </div >
    );
}

export default Login;