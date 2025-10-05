import {useState} from 'react'
import '../styles/App.css'
import {StarBackground} from "../components/StarBackground.tsx";
import {ConstellationsStars} from "../components/ConstallationsStars.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <StarBackground/>
            <ConstellationsStars />
        </>
    )
}

export default App
