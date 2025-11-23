import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
     
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Indulge in a delightful culinary journey with our carefully crafted menu, featuring a variety of mouthwatering dishes made from the freshest ingredients. From savory appetizers to delicious main courses and decadent desserts, we have something to satisfy every craving. Whether you're in the mood for a quick bite or a lavish feast, our menu offers a perfect blend of flavors to elevate your dining experience.</p>
      <div className='explore-menu-list'>
         {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                  <p>{item.menu_name}</p>
              </div>
            )
         })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
