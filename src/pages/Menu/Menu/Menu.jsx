import { Helmet } from "react-helmet";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bgg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import slaadImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} ></MenuCategory>
            <MenuCategory items={pizza} title="salad" img={slaadImg} ></MenuCategory>
            <MenuCategory items={pizza} title="soup" img={soupImg} ></MenuCategory>




        </div>
    );
};

export default Menu;