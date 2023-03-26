import hamburgesaImg from '../../assets/1.jpg'
import mexImg from '../../assets/2.jpg'
import postreImg from '../../assets/3.jpg'
import pizzaImg from '../../assets/4.jpg'
import ensladaImg from '../../assets/5.jpg'
import cervezaImg from '../../assets/7.jpg'
import { Category } from '../../models/Category'

import CardProduct from './CardProduct'

const GridProducts = () => {
  const categories: Category[] = [
    {
      name: 'Hamburguesas',

      url: 'https://media.istockphoto.com/id/1309352410/es/foto/hamburguesa-con-queso-con-tomate-y-lechuga-en-tabla-de-madera.jpg?s=612x612&w=0&k=20&c=HaSLXFFns4_IHfbvWY7_FX7tlccVjl0s0BrlqaLHOTE='
    },
    {
      name: 'Mex food',

      url: 'https://media.istockphoto.com/id/1413248571/es/foto/dos-tacos-con-carne-molida-y-lima-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=RzYms3kuiDshrxQg23DyFsRCnZ95IJFLcn8t0mUeqSM='
    },
    {
      name: 'Postres',

      url: 'https://media.istockphoto.com/id/178826332/es/foto/wafles-de-ar%C3%A1ndanos.jpg?s=612x612&w=0&k=20&c=98HIW3uaYv2Y4VKOQX9sLX-mO8VStV_wr6sEQver2p8='
    },
    {
      name: 'Pizzas',

      url: 'https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=612x612&w=0&k=20&c=GUwbHCrMdnpHGmTzHVPk2U9flWi3WgMVdfdOeBMU00E='
    },
    {
      name: 'Ensaladas',

      url: 'https://media.istockphoto.com/id/175197961/es/foto/plato-de-ensalada.jpg?s=612x612&w=0&k=20&c=NpCj052hPckQlukeFBBDfyfiUQ3tLEVgX-rGn9z_n2M='
    },
    {
      name: 'Sandiwchs',

      url: 'https://media.istockphoto.com/id/157431311/es/foto/s%C3%A1ndwich-de-turqu%C3%ADa.jpg?s=612x612&w=0&k=20&c=OF_tVXf0g4CxwNY8eqZ7UpuolEarD_mYLWop612Sk0A='
    },
    {
      name: 'Cervezas',

      url: 'https://media.istockphoto.com/id/1248993201/es/foto/taza-llena-de-picad%C3%ADa-con-pilsen-de-picad%C3%A9-en-una-mesa-r%C3%BAstica.jpg?s=612x612&w=0&k=20&c=2phskstzttTNbrZDhNXqihymzbQWrPg0sWHzZm0QTx0='
    }
  ]
  return (
    <>
      <h2 className='max-sm:mt-1 mt-36 mb-10 text-center font-semibold text-yellow-500 text-4xl'>
        Menus
      </h2>
      <div className='max-sm:grid-cols-1 gap-10 grid grid-cols-3 justify-center p-2 '>
        {categories.map((category) => {
          return (
            <CardProduct
              key={category.name}
              name={category.name}
              url={category.url}
            />
          )
        })}
      </div>
    </>
  )
}

export default GridProducts
