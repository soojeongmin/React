import {useState, useCallback} from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  const [category, setCategory] = useState('all');

  const changeCategroy = useCallback((cate) => {
    setCategory(() => cate);
  }, []);

  return (
    <>
      <Categories category={category} changeCategroy={changeCategroy}/>
      <NewsList/>
    </>
  );
}

export default App;
