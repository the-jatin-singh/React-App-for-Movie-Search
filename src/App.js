import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Element from './Element';
import icon from './assets/icon.png';
import Footer from './Footer';


// https://www.omdbapi.com/?apikey=947bf7c0&t=batman


const App = () => {
    const [inputValue, setInputValue] = useState('Batman');
    const [data, setData] = useState(null);
    const [querry, setQuerry] = useState(inputValue);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    const handleImageClick = () => {
        setQuerry(inputValue);
    };

    const btnClick = () => {
        setError(null);
        setPending(true);
        handleImageClick();
    }

    useEffect(() => {
        
        setTimeout(()=>{
            fetch(`https://www.omdbapi.com/?apikey=947bf7c0&s=${querry}`)
            .then(res=>res.json())
            .then((data)=>{
                if(data.Response == "False"){
                    setPending(false);
                    setData(null)
                    setError("No Result Found");
                }else{
                    setError(null)
                    setPending(false)
                    setData(data.Search)
                }
            })
            },1000)
    }, [querry])
        
        

    return (
        <div>
            <Navbar />

            <div className='search-container'>
                <input value={inputValue} placeholder={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <img className='search-icon' src={icon} onClick={btnClick}/>
            </div>

            {error && <p style={{"textAlign":"center"}}>{error}</p>}
            {pending && <p style={{"textAlign":"center"}}>Loading...</p>}

            <div className='container'>
                {data && data.map((element)=><Element data={element} />) } 
            </div>

            <Footer />
        </div>
    )
}

export default App