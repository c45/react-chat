import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { app } from '.'
import Loader from './components/Loader'

const App = () => {
	const auth = getAuth(app)
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		return <Loader />
	}


	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App