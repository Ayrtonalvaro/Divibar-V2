import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect
} from 'react'
import { User } from '../models/User'
import axios from 'axios'
type Props = {
  children: ReactNode
}

type AuthData = {
  user: User | null
  token: string
}

type GlobalContext = {
  auth?: AuthData
  setAuth: (authData: AuthData) => void
}

const AuthContext = createContext<GlobalContext>({ setAuth: () => {} })

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthData>({
    user: {} as User,
    token: ''
  })

  axios.defaults.headers.common['Authorization'] = auth?.token

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
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
