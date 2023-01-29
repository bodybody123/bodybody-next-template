"use client"

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MuiLink from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box } from "@mui/system";

const Login: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const onSubmit = (e: any) => {
        setIsProcessing(true);

        e.preventDefault();
        console.log(e.target.username.value, e.target.password.value, 'forms');

        setTimeout(() => {
          setIsProcessing(false);
        }, 2000);
    }

    return (
      <Container className="h-screen flex items-center flex-col justify-center max-w-md">
        <Grid container component={'form'} method="POST" onSubmit={onSubmit} spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth name="username" label='Username'/>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label='Remember me'/>
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              type="submit" 
              variant="contained" 
              disabled={isProcessing}
            >
              {isProcessing ? <CircularProgress size={24}/> : 'Login'}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <MuiLink  component={NextLink} href={'/forgot'} variant="caption">Forgot Password?</MuiLink>
          </Grid>
          <Grid className='flex justify-end' item xs={6} >
            <Typography variant="caption">Don&apos;t have account?</Typography>{' '} 
            <MuiLink  component={NextLink} href={'/sign-up'} variant="caption">Sign up now</MuiLink>
          </Grid>
        </Grid>
      </Container>
)}

export default Login;