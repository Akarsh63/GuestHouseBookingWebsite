import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Grid, Link, Typography } from '@mui/material';

export default function Contactcomponent({ heading, data, icon }) {
  return (
    <Paper sx={{ width: '100%' }} elevation={4}>
      <Box style={{ padding: '20px 30px' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item style={{ textAlign: 'center' }}>
            {icon}
          </Grid>
          <Grid item style={{ textAlign: 'center' }}>
            <Typography sx={{ fontWeight: '700', fontSize: '24px' }}>
              {heading}
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: 'center' }}>
            <Link sx={{ textDecoration: 'none', color: '#000' }}>{data}</Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
