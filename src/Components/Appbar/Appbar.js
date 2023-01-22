import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./Appbar.css"
import { Link , Redirect , Switch} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';


export function ButtonAppBar() {
  const cartstate = useSelector(state=>state.cartReducer)
  console.log(cartstate.cartItems.length)
  // var length = 1;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='Appbar'>
        <Toolbar >
          <Typography variant="h6" className='appname' component="div" sx={{ flexGrow: 1 }}>
              PAYMENT INTEGRATION APP
          </Typography>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: -1 }}>
            <Link className='home'  to="/getfoods">
              Home </Link>
          </Typography>
          <IconButton size="large" aria-label="show ordered items" color="inherit">
            <Link className='cart-icon' to='/cart'>
               <Badge badgeContent={cartstate.cartItems.length} color="error">
                  <ShoppingCartIcon />
               </Badge> 
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
