import MenuItem from "./MenuItem"
export default function Menu({menuItems}){
    return(
        menuItems.map(item=><MenuItem key={item.title} title={item.title} titleEN={item.titleEN} description={item.description} img={item.img} price={item.price}/>)
    )

}