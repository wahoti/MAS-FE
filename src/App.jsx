import './App.css';
import useSWR from 'swr'

const DEV = true;

const API_URL = DEV ? 'http://localhost:3005' : '';

// const API_URL = process.env.API_URL;
// const DEV = process.env.DEV;

console.log('API_URL', API_URL);
console.log('DEV', DEV);

// const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = (...args) => fetch(...args).then(res => res);

const App = () => {
  const { data, error, isLoading } = useSWR(`${API_URL}/test`, fetcher)

  console.log(data, error, isLoading);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
