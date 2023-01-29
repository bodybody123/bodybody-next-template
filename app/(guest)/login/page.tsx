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
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.username.value, e.target.password.value, 'forms');
    }

    return <Container className="h-screen flex items-center justify-center">
        <Paper className="p-5" elevation={16}>
            <form method="POST" onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth name="username" label='Username'/>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          name="password"
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
                          }
                          label="Password"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label='Remember me'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Typography variant="caption">Don&apos;t have account?</Typography> 
              <MuiLink  component={NextLink} href={'/sign-up'} variant="caption">Sign up now</MuiLink>
        </Paper>
        </Container>
}

export default Login;