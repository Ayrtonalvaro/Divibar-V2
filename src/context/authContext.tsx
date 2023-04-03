import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect
} from 'react'
import { User } from '../models/User'
type Props = {
  children: ReactNode
}

const AuthContext = createContext({})

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({
    user: {} as User,
    token: ''
  })
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if (data) {
      const parseData = JSON.parse(data)
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
