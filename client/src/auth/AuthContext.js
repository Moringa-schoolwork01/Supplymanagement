// import { createContext, useContext,useState } from 'react'

// const AuthContext = createContext()

// function useAuth() {
//     const context = useContext(AuthContext)

//     if(!context) {
//         throw new Error('useauth must be used within an AuthProvider')
//     }
//     return context
// }

// function login(email, password) {
//     if (email === 'user@example.com' && password === 'pass123') {
//         return true
//     }else {
//         return false
//     }
// }



// export function AuthProvider({ children}) {
//     const [isAuthenticated, setIsAuthenticated] = useState(false)

//     function handleLogin(email, password) {
//         const isLoggedIn = login(email, password)
//         setIsAuthenticated(isLoggedIn)
//     }

//     function handleLogout() {
//         setIsAuthenticated(false)
//     }

//     const value = {
//         isAuthenticated,
//         handleLogin,
//         handleLogout
//     }
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
// }

// export  {useAuth}