import { Routes, Route } from 'react-router-dom';

import { Header, MovieCard, Footer } from './components'
import { DashboardLayout, Movies  } from './dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/dashboard' element={ <Dashboard /> }>
        <Route path='/dashboard/movies/:id' element={ <Movies /> }/>
      </Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <MovieCard />
      <Footer />
    </div>
  )
}

function Dashboard() {
  return (
    <div>
        <DashboardLayout />     
    </div>
  )
}

export default App;
