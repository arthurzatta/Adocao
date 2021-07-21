//Esse form provavelmente precisa ser modificado
//Dar uma lida naquela biblioteca formik


const SignUp = (): any => {
    return (
        <div>
            <form action="">
                <div>
                    <label>Nome:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Número de Celular:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Estado:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Cidade:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Senha</label>
                    <input type="text" />
                </div>

                <div>
                    <p>Você é uma ong?</p>
                    <label>Sim</label>
                    <input type="text" />
                    <label>Não</label>
                    <input type="text" />
                </div>

                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
}

export default SignUp;