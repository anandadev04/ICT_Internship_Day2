import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Add() {

  return (
    <div>
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <TextField id="outlined-basic" label="Name" variant="outlined" InputProps={{ sx: { backgroundColor: 'white' }}}/>
      <TextField id="outlined-basic" label="Department" variant="outlined" InputProps={{ sx: { backgroundColor: 'white' }}}/>
      <TextField id="outlined-basic" label="Semester" variant="outlined" InputProps={{ sx: { backgroundColor: 'white' }}} />
    </Stack><br/>
    <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
    </Stack>

    </div>
  );
}

export default Add;