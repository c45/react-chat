import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import {app} from '../index'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'


const Navbar = () => {
	const auth = getAuth(app)
	const [user] = useAuthState(auth)

	return (
		<AppBar color={'info'} position="static">
			<Toolbar variant={'dense'}>
				<Grid container justify={'flex-end'}>
					{user ? 
						<Button onClick={() => signOut(auth)} color={'error'} variant={'contained'}>Выйти нахуй</Button>
						:
						<NavLink to={LOGIN_ROUTE}>
							<Button color={'success'} variant={'contained'}>Войти</Button>
						</NavLink>
					}
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar