const Login = () => {
    

    return (
        <div>
            <form >
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Insert Email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" placeholder="Insert Password" />
                </div>
                <button type="submit" >Entrar</button>
            </form>
        </div>
    );
}

export default Login;