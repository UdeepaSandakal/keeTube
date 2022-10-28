import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'felx', alignItems: 'center'}}>
        <img src={logo} alt="logo" height={90} />
      </Link>

      <Box>
         <Typography variant="h2" fontWeight="bold" mb={2} sx={{ color: 'white'}} align="auto">
          kee<span style={{ color: '#20af6c'}}>Tube</span>
         </Typography>
      </Box>

      <SearchBar />
    </Stack>
);

export default Navbar