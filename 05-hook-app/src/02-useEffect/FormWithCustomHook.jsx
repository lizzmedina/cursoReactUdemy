import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInpuntChange, onResetForm}= useForm ({
        username: '',
        email: '',
        password: '',
    })

    const {username, email, password} = formState; // esta parte también podría ir en el custom de useForm, para ello es necesario desestructurar aquí el mismo formState (que ya está)  y los datos del mismo (username, email, password). por otro lado en el custom, debería exponerse el objeto con el spred en el return.

    useEffect(()=>{
        //console.log('useEffect called!');
    }, []);

    useEffect(()=>{
        //console.log('formState changed');
    }, [formState]);

    useEffect(()=>{
        //console.log('email changed');
    }, [email]);
    
    return (
        <>
            <h1> Formulario con custom hook </h1>
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
                placeholder="correoelectronico"
                name= "email"
                value= {email}
                onChange={ onInpuntChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contaseña"
                name= "password"
                value= {password}
                onChange={ onInpuntChange }
            />
            
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar todo</button>

        </>
    )
}
