import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";




const axiosSecure =axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate =useNavigate();
   const {logOut} =useAuth();
    // request intreceptor to add autthorization header fo every secury call to teh api
    axiosSecure.interceptors.request.use(function(config){
        const token =localStorage.getItem('access-token')
        // console.log('request soopte by interceptor', token)
        config.headers.authorization =`Bearer ${token}`;
        return config;
    },function(error){
        // Do something wwhit request error
        return Promise.reject(error);
    });

// intercepts 401 and 4003 status
axiosSecure.interceptors.response.use(function(response){
    return response;
},async(error) =>{
    const status =error.response.status;
// console.log('stuts error in the interceptor',error)
if(status === 401 || status === 403){
    await logOut();
navigate('/login')
}
return Promise.reject(error);
})              


 return axiosSecure

};

export default useAxiosSecure;