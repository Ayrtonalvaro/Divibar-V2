import hamburgesaImg from '../../assets/1.jpg'
import mexImg from '../../assets/2.jpg'
import postreImg from '../../assets/3.jpg'
import pizzaImg from '../../assets/4.jpg'
import ensladaImg from '../../assets/5.jpg'
import cervezaImg from '../../assets/7.jpg'
import { Category } from '../../models/Category'
import { Menu } from '../../models/Menu'

import CardProduct from './CardProduct'

const GridProducts = (menu: Menu[]) => {
  const categories: Category[] = [
    {
      name: 'Hamburguesas',

      url: 'https://media.istockphoto.com/id/1309352410/es/foto/hamburguesa-con-queso-con-tomate-y-lechuga-en-tabla-de-madera.jpg?s=612x612&w=0&k=20&c=HaSLXFFns4_IHfbvWY7_FX7tlccVjl0s0BrlqaLHOTE='
    },
    {
      name: 'Tex-mex',

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

  const hamburguesas: Menu[] = [
    {
      name: 'Divi Clásica',
      description:
        'Medallon de 180gr, lechuga, tomate, cebolla, pepinillos y cheddar ',
      price: 100,
      image:
        'https://marketing4ecommerce.net/wp-content/uploads/2016/12/shutterstock_259773713-compressor.jpg'
    },
    {
      name: 'Divi doble con queso',
      description: 'doble medallon de 100gr,cebolla, cheddar y cheddar',
      price: 100,
      image:
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar'
    },
    {
      name: 'Divi tasty',
      description:
        'doble medallo de 100gr,lechuga, tomate, salsa divi y cheddar',
      price: 100,
      image:
        'https://www.circuitogastronomico.com/wp-content/uploads/2021/09/hoppi-burger.jpg'
    },
    {
      name: 'Divi monster',
      description: 'triple medallon de 100gr,bacon y triple cheddar',
      price: 100,
      image:
        'https://cdn.shopify.com/s/files/1/0278/9146/6311/products/lidotriple_1024x.png?v=1638388792'
    }
  ]

  const texMex: Menu[] = [
    {
      name: 'Divi Tacos',
      description: '3 Tacos de pollo, carne o cerdo ',
      price: 100,
      image:
        'https://jackthepepper.com/wp-content/uploads/2020/02/destacada-blog-jtpp.jpg'
    },
    {
      name: 'DiBurritos',
      description: '2 burritos de pollo, carne o cerdo',
      price: 100,
      image:
        'https://www.schaer.com/sites/default/files/styles/panoramic_fullwidth/public/2016-07/1149_WrapTexMex.webp?itok=7AEVbMZY'
    },
    {
      name: 'Divi nachos',
      description: 'Nachos rancheros',
      price: 100,
      image:
        'https://i0.wp.com/www.rombys.com/wp-content/uploads/2017/01/nachosmenu.jpg?w=600'
    },
    {
      name: 'DiviDillas',
      description: 'Delicisosas quesadillas',
      price: 100,
      image: 'https://i.blogs.es/2a00ea/quesadilla_vertical/1366_2000.jpg'
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
