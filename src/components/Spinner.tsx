import { useState, CSSProperties, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from 'react-router-dom'
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const Spinner = () => {
  const [count, setCount] = useState<number>(5)
  const navigate = useNavigate()
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevValue => --prevValue )
    },1000)
    count === 0 && navigate('/login')
    return () => clearInterval(interval)
  },[count, navigate])
  return (
    <div className='sweet-loading'>
      <h1 className='text-center text-4xl'>Redirecting to you {count} second...</h1>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Spinner
