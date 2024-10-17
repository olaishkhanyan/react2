import books from './data/books.json';
import Ricky from './components/Ricky';

const App = () => {
  return (
    <>
    {books.results.map( b=> <Ricky ricky={b}/>)}
    </>
  )
}

export default App 