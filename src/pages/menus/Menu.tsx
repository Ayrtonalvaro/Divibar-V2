import { Category } from "../../models/Category"
import GridMenus from "./GridMenus"
import { Menu } from "../../models/Menu"
import { useState } from "react"
import { postres } from "../../api"
import { hamburguesas } from "../../api"
import { pizzas } from "../../api"
import { texMex } from "../../api"
import { sandiwch } from "../../api"
import { cervezas } from "../../api"
import { ensaladas } from "../../api"
const Menu = () => {

const categories: Category[] = [
  {
    name: 'Hamburguesas',

    url: 'https://media.istockphoto.com/id/1309352410/es/foto/hamburguesa-con-queso-con-tomate-y-lechuga-en-tabla-de-madera.jpg?s=612x612&w=0&k=20&c=HaSLXFFns4_IHfbvWY7_FX7tlccVjl0s0BrlqaLHOTE='
  },
  {
    name: 'Tex-Mex',

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
const [menus, setMenus] = useState<Menu[]>(hamburguesas)

  const handleFilterMenu = ({category}: {category:string}) => {
    switch (category) {
      case 'Hamburguesas':
        setMenus(hamburguesas)
        break
      case 'Tex-Mex':
        setMenus(texMex)
        break
      case 'Postres':
        setMenus(postres)
        break
      case 'Pizzas':
        setMenus(pizzas)
        break
      case 'Ensaladas':
        setMenus(ensaladas)
        break
      case 'Sandiwchs':
        setMenus(sandiwch)
        break
      case 'Cervezas':
        setMenus(cervezas)
        break
      default:
        setMenus(hamburguesas)
    }
  }

  return (
    <div className='md:h-screen pt-36'>
      <h1 className='text-yellow-500 text-center text-4xl mt-10'>Menus</h1>
      <div className='flex justify-center max-sm:mt-3 mt-10'>
        <ul className='max-sm:flex  max-sm:gap-1 flex gap-20 text-lg font-semibold cursor-pointer'>
          {categories.map((category) => {
            return (
              <li key={category.name}>
                <img
                  onClick={() => handleFilterMenu({category: category.name})}
                  className='max-sm:w-12 max-sm:h-12 w-28 h-28 rounded-full '
                  src={category.url}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <GridMenus menus={menus}/>
    </div>
  )
}

export default Menu
