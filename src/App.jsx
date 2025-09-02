import React, { useEffect } from 'react';
import './App.css';
// import useSWR from 'swr'

const DEV = true;

const API_URL = DEV ? 'http://localhost:3005' : '';

const testEndpoint = `${API_URL}/test`;

// const API_URL = process.env.API_URL;
// const DEV = process.env.DEV;

console.log('API_URL', API_URL);
console.log('DEV', DEV);

async function getData() {
  const url = testEndpoint;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // return response;
    const result = await response.json();
    return result;
    // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// const fetcher = (...args) => fetch(...args).then(res => res.json())
// const fetcher = (...args) => fetch(...args).then(res => res);

const App = () => {
  // const { data, error, isLoading } = useSWR(`${API_URL}/test`)
  // console.log(data, error, isLoading);

  useEffect(() => {
    const doFetchData = async () => {
      const res = await getData();
      console.log('res', res);
    }
    doFetchData();
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
