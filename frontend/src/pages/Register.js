import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { Registration }  from "../redux/actions/authAction"
import { FormControl, FormLabel, InputLabel, MenuItem, Radio, RadioGroup } from '@mui/material';

import Select from 'react-select'

const theme = createTheme();

export default function Register() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name,setName]=useState()
  const [prenom,setPrenom]=useState()
  const [Telephone,setTelephone]=useState()
  const [Profession,setProfession]=useState()
  const [Adresse,setAdresse]=useState()
  const [Age,setAge]=useState()
  const [position,setPosition]=useState()
  const [tarif,setTarif]=useState()
  const [role,setRole]=useState()





  const dispatch = useDispatch()
  const Navigate = useNavigate()

 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form>
          <Box  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="name"
                  id="name"
                  autoComplete="name"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  value={name}
                
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="prenom"
                  label="prenom"
                  id="prenom"
                  autoComplete="prenom"
                  onChange={(e) => {
                    setPrenom(e.target.value)
                  }}
                  value={prenom}

                  />
                </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  id="email"
                  autoComplete="your email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                />
              </Grid>
             
              
              <Grid item xs={12}>
                <TextField
               
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  value={password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
               
                  required
                  fullWidth
                  id="Telephone"
                  label="Telephone"
                  name="Telephone"
                  autoComplete="Telephone"
                  onChange={(e) => {
                    setTelephone(e.target.value)
                  }}
                  value={Telephone}
                 
                />
              
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  id="Profession"
                  label="Profession"
                  name="Profession"
                  autoComplete="Profession"
                  onChange={(e) => {
                    setProfession(e.target.value)
                  }}
                  value={Profession}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  id="Adresse"
                  label="Adresse"
                  name="Adresse"
                 
                  autoComplete="Adresse"
                  onChange={(e) => {
                    setAdresse(e.target.value)
                  }}
                  value={Adresse}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  id="Age"
                  label="Age"
                  name="Age"
                 
                  autoComplete="Age"
                  onChange={(e) => {
                    setAge(e.target.value)
                  }}
                  value={Age}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  id="position"
                  label="position"
                  name="position"
                 
                  autoComplete="position"
                  onChange={(e) => {
                    setPosition(e.target.value)
                  }}
                  value={position}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  id="tarif"
                  label="tarif"
                  name="tarif"
                 
                  autoComplete="tarif"
                  onChange={(e) => {
                    setTarif(e.target.value)
                  }}
                  value={tarif}
                />
              </Grid>
             < Grid item xs={12} >
                <TextField
               
                  required
                  fullWidth
                  id="role"
                  label="role"
                  name="role"
                 
                  autoComplete="role"
                  onChange={(e) => {
                    setRole(e.target.value)
                  }}
                  value={role}
                />
              </Grid>
             
             
  
              
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                e.preventDefault(e)
                dispatch(Registration({name,prenom,email, password,Telephone,Profession,Adresse,Age,position,tarif,role
                 },Navigate))
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  I have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
