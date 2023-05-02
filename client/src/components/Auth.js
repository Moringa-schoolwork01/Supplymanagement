
import { useState, createContext, useContext } from "react"; 
// import { AuthContext} from 'react-authentication'


const AuthContext = createContext('')

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
    <AuthContext.Provider value={ {user, login, logout}}>
        {Children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}



// class Auth {
//     constructor(){
//         this.authenticated = false
//     }

//     login(cb) {
//         this.authenticated = true
//         cb()
//     }

//     logout(cb) {
//         this.authenticated = false
//         cb()
//     }

//     isAuthenticated() {
//         return this.authenticated
//     }
// }

// export default new Auth()