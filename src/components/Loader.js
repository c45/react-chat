import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Loader = () => {
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
          container
          alignItems={"center"}
          direction={"column"}
        >
				<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </Grid>
      </Grid>
    </Container>
	)
}

export default Loader