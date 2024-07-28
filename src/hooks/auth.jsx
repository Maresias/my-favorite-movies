import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    
    const [ data, setData ] = useState({})

    async function signIn({email, password}){

        try{
            const response =  await api.post("/sessions", {email, password})
            const {user, token } = response.data

            
            
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})
            
        }catch(error){
            
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível logar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem('@rocketmovies:user')
        localStorage.removeItem('@rocketmovies:token')

        setData({})
    }

    async function updateProfile({user, avatarFile}){

        try{
            if ( avatarFile ){
                const fileUpdateForm = new FormData()
                fileUpdateForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUpdateForm)
                user.avatar = response.data.avatar
            }
            await api.put("/users", user)

            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

            setData({user, token: data.token})
            alert("Perfil Atualizado")

        }catch (error){
            
            if (error.response){

                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar! ")
            } 
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("@rocketmovies:token")
        const user  = localStorage.getItem("@rocketmovies:user")

        if ( user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])


    return (
        <AuthContext.Provider 
            value={{ 
                signIn,
                signOut,
                updateProfile, 
                user: data.user}}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}


export { AuthProvider, useAuth }