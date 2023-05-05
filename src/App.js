//component/style imports
import './App.css'
import Nav from './Nav'
import Movie from './Movie'
import Cast from './Cast'
import Reviews from './Reviews'

//functional based component that calls/returns components from imported modules
function App() {
    return <div className="App">
        <Nav></Nav>
        <Movie></Movie>
        <Cast></Cast>
        <Reviews></Reviews>
    </div>
}

export default App