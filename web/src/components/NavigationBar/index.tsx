import { Avatar, Button, ClickAwayListener, Grow, makeStyles, MenuItem, MenuList, Paper, Popper } from "@material-ui/core"
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ToggleMenu } from "..";

export default function NavigationBar() {
    const classStyles = useStyle();

    return (
        <nav className={classStyles.nav}>
            <div style={{ display: 'flex' }}>
                <Link to='/' className={classStyles.anchors}>Inicio</Link>
                <Link to='/' className={classStyles.anchors}>Alertas</Link>
                <Link to='/' className={classStyles.anchors}>Perfis</Link>
            </div>

            {/* Bloco de perfil - menu (nome, image): clickable, edit profile, favorites*/}
            <div className={classStyles.profileMenu}>
                <ToggleMenu >
                    <label className={classStyles.labelName} >Nome</label>
                    <Avatar alt='adocao' src='/assets/logotipo.png'>AD</Avatar>
                </ToggleMenu >
            </div>

        </nav>
    )
}

//Alterar essa estilizacao de img
const useStyle = makeStyles({
    nav: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '7px',
        backgroundColor: '#EA5455',
    },
    profileMenu: {
        display: 'flex',
        flexDirection: 'row',
    },
    labelName: {
        marginRight: '10px'
    },
    anchors: {
        textDecoration: 'none',
        color: '#F6F6F6',
    }

})