import { IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import './Button.css';


export function Button() {
    return (
        <Link to="/">
        <Stack className='logoDetails' direction="row" spacing={3}>
      <IconButton aria-label="coffeeMaker" className='iconBt'>
      <CoffeeMakerIcon className='icon' />
      </IconButton>
      </Stack>
      </Link>
    )
}