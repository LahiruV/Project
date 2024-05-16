import React, { useState } from 'react';
import styles from './login.module.css'; // Assuming you have a CSS module for styling
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', credentials);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className={styles.loginContainer}>
      <Container
        maxWidth="sm"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          boxShadow={3}
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={3}
        >
          <Typography variant="h3" color="primary" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                style={{ width: '30%' }}
              >
                Login
              </Button>
            </Box>
          </form>
          <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 4 }}>
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
