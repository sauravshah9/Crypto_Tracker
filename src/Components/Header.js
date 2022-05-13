import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import React from 'react'

const useStyles=makeStyles(()=>({
    title: {
        flex:1,
        color: "gold",
        fontFamily : "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }

}))


const Header = () => {
    const history =useHistory();
    const classes=useStyles();
  return (
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography className={classes.title}>Crypto Hunter</Typography>
                <Select variant='outlined'
                style={{
                    width:100,
                    height:40,
                    margginLeft: 15,
                }}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
                
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    
  );
}

export default Header