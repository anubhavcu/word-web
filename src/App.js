import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
const App = () => {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/hello`
    );
    const res = await data.json();
    console.log(res);
    setMeanings(res.data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div
      className='App'
      style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}
    >
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
};

export default App;
