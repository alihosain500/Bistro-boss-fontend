import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "../pages/Dashboard/Cart/Cart";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { FaAd } from "react-icons/fa";


const Dashboard = () => {
    const [cart] = useCart();

    // TODo: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400 text-black">
                <ul className="menu p-4">
         
{
    isAdmin?<>
               <li>

<NavLink to="/dashboard/adminHome">
    <FaHome></FaHome>
    Admin Home</NavLink>
</li>
<li>

<NavLink to="/dashboard/addItems">
    <FaUtensils></FaUtensils>
    Add Items</NavLink>
</li>


<li>

<NavLink className="bg-blue-700" to="/dashboard/manageItems">
    <FaList></FaList>
    Manage Items</NavLink>
</li>

<li>
<NavLink to="/dashboard/bookings">
    <FaBook></FaBook>
    Manage Bookings</NavLink>

</li>


<li>

<NavLink to="/dashboard/users">
    <FaUsers></FaUsers>
    All Users</NavLink>
</li>
    </>
    :
    <>
               <li>

<NavLink to="/dashboard/userHome">
    <FaHome></FaHome>
    User Home</NavLink>
</li>
<li>

<NavLink to="/dashboard/reservation">
    <FaCalendar></FaCalendar>
    Reservation</NavLink>
</li>
<li>

<NavLink to="/dashboard/review">
    <FaAd></FaAd>
    Add a Review</NavLink>
</li>
<li>

<NavLink className="bg-blue-700" to="/dashboard/cart">
    <FaShoppingCart></FaShoppingCart>
    My Cart ({cart.length})</NavLink>
</li>

<li>

<NavLink to="/dashboard/booking">
    <FaList></FaList>
    My booking</NavLink>
</li>
    </>
}
                    
                    {/* shared nav link */}

                    <div className="divider text-red-600"></div>

                    <li> <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li> <NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                    </li>
                    <li> <NavLink to="/order/contact">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>
                </ul>

            </div>

            {/*  dashboaard content*/}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;