import CategoryItem from '../catagory-item/category-item.components.jsx'
import './menu.styles.scss'



const Menu = ({categories}) => {
  return (
     <div className='menu-container'>
        {categories.map((category) => (
          <CategoryItem  key={category.id} category={category}/>
        ))}
     </div> 
      
  )
}

export default Menu
