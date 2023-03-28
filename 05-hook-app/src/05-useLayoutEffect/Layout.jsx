import { useFetch } from "../hooks/useFetch"
import { LoandingQuote, Quote } from "../03-examples";

export const Layout = () => {
    const {data, isLoading, hasError} = useFetch(' https://api.breakingbadquotes.xyz/v1/quotes');    
    const {quote, author} = !!data && data[0];
    
    const handleClick = () => {
        window.location.reload();
    };

  return (
    <>
        <h1> breaking bad quotes </h1>  
        <hr />

        {
            isLoading 
            ? <LoandingQuote/> 
            : <Quote author={author} quote={quote} />
        }
        <button 
        onClick={handleClick} 
        disabled = {isLoading}
        className="btn btn-primary">
            Next quote
        </button>
        
    </>
  )
}
