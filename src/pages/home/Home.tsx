import Footer from '../../components/footer/Footer'
import GridProducts from '../../components/Products/GridProducts'
import Banner from './Banner'
import HappyHours from './HappyHours'
import { useAuth } from '../../context/authContext'

const Home = () => {
  return (
    <div>
      <Banner />
      <HappyHours />
      <GridProducts />
    </div>
  )
}

export default Home
