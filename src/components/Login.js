import { Grid, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from '../index'

const Login = () => {
	const provider = new GoogleAuthProvider();

	const login = async () => {
	const auth = getAuth(app);
	const {user} = await signInWithPopup(auth, provider);
	console.log(user)
}
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        
        style={{ minHeight: "100vh", marginTop:'100px'}}
      >
        <Grid
          style={{ width: 500, height: 200, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={10}>
            <Button onClick={login} variant={"contained"}>Авторизация через Гугл</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
