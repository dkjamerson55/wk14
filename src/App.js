//component/style imports
import './App.css'
import Nav from './Nav'
import Review from './Movie'
import Cast from './Cast'

//functional based component that calls/returns components from imported modules
function App() {
    return <div className="App">
        <Nav></Nav>
        <Review></Review>
        <Cast></Cast>
    </div>
}

export default App