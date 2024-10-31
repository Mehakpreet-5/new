import { useState } from "react";

export const Login = ()=>{
    const [user, setUser] = useState({
        email : "",
        password: "",
    })

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({

            ...user,
        })
    }
}