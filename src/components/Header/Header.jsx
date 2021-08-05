import { MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import categories from '../../data/categories';
import './header.css';
const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });
  const handleLanguageChange = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Word-web'} </span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            label='Enter your word here... '
            value={word}
            onChange={(e) => setWord(e.target.value)}
          ></TextField>
          <TextField
            select
            className='select'
            value={category}
            onChange={(e) => handleLanguageChange(e.target.value)} // e.target.value is label , see value below
            label='Language'
          >
            {categories.map((category) => (
              <MenuItem key={category.label} value={category.label}>
                {category.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

// ! see className='inputs'
