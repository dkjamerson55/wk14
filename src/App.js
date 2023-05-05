//component/style imports
import './App.css'
import Nav from './Nav'
import Movie from './Movie'
import Cast from './Cast'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'

//functional based component that calls/returns components from imported modules
function App() {
    return <div className="App">
        <Nav></Nav>
        <Movie></Movie>
        <Cast></Cast>
        <Reviews></Reviews>
        <ReviewForm></ReviewForm>
    </div>
}

export default App