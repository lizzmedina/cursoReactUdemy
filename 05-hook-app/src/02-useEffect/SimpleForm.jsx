import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com',
    });

    const {username, email} = formState; 
    
    const onInpuntChange =  ({ target }) => {
        
        const {name, value}= target;
        
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    useEffect(()=>{
        //console.log('useEffect called!');
    }, []);

    useEffect(()=>{
        //console.log('formState changed');
    }, [formState]);

    useEffect(()=>{
        //console.log('email changed');
    }, [email]);

    // useEffect (()=> {
    //     return ()=> {
            
    //     }
    // }, [])
    
    return (
        <>
            <h1> Formulario Simple </h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value ={username}
                onChange={ onInpuntChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name= "li.1212@hotmail.com"
                value= {email}
                onChange={ onInpuntChange }
            />
            
            {
                (username === 'strider2') && <Message/>
            }
        </>
    )
}
