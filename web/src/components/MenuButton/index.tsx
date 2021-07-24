import { Button, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";

export default function MenuButton(props: any): any {

    //Usar um useEffect quando integrar com api pra poder carregar todos os valores
    //Ou receber os valores via prop ou context e depois listar por aqui

    const [anchorEl, setAnchorEl] = useState(null);
    const classStyle = useStyles();

    function onHandleClick(e: any): any {
        console.log(anchorEl);
        setAnchorEl(e.currentTarget);
    }

    function onHandleClose(): any {
        setAnchorEl(null);
    }

    return (
        <div className={classStyle.button}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e: any) => onHandleClick(e)}>
                {props?.children}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onHandleClose}
            >
                <MenuItem onClick={onHandleClose}>Teste1</MenuItem>
                <MenuItem onClick={onHandleClose}>Teste2</MenuItem>
                <MenuItem onClick={onHandleClose}>Teste3</MenuItem>
            </Menu>
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    button: {
        padding: theme.spacing(2)
    }
}));