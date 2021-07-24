import { Button as MUIButton, makeStyles } from "@material-ui/core";

export default function Button(props: any) {

    return <MUIButton
        style={styles}
        type={props?.type}
        variant='contained'
        onClick={props?.onClick}
    >
        {props?.children}
    </MUIButton>;
}

const styles = {
    backgroundColor: '#EA5455',
    color: '#F6F6F6',
    borderRadius: '8px',
}