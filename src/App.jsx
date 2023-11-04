import React, { Suspense } from 'react'
import './App.css'
import Postal from './components/Postal/Postal'
import Spinner from './utils/Spinner/Spinner';
const Detail = React.lazy(() => import('./components/PostalDetails/Detail'));

function App() {
  return (
    <>
      <Postal />
      <Suspense fallback={<Spinner />}>
        <Detail />
      </Suspense>
    </>
  )
}

export default App
