import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';
const App = () => {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      const res = await data.json();
      console.log(res);
      res.typeof === 'Array' ? setMeanings(res) : setMeanings(res.title);
    } catch (err) {
      console.log(err);
    }
    // setMeanings(res);
  };
  useEffect(() => {
    fetchDetails();
  }, [word]);
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
        <Definitions word={word} meanings={meanings} category={category} />
      </Container>
    </div>
  );
};

export default App;
