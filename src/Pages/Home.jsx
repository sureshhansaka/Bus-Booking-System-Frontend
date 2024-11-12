import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  height: 120,
  borderRadius: 15,
  padding: theme.spacing(6),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Home() {
  return (
    <Stack direction="row" spacing={2} marginTop={15} justifyContent={'center'}>
      <DemoPaper variant="elevation">
      <TextField id="username" label="From" variant="outlined" />
      
      </DemoPaper>
    </Stack>
  );
}
