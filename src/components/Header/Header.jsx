import { TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import './header.css';
const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <div className='header'>
      <span className='title'>Word-web</span>
      <ThemeProvider theme={darkTheme}>
        <TextField
          id='standard-basic'
          label='Enter your word here... '
        ></TextField>
      </ThemeProvider>
    </div>
  );
};

export default Header;
