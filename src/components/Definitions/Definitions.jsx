import './definitions.css';
const Definitions = ({ word, meanings, category }) => {
  return (
    <div>
      {word} {category}
      {console.log(meanings)}
    </div>
  );
};

export default Definitions;
