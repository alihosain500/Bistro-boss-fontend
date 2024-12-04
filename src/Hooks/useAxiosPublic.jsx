import axios from "axios";

const asioPublic =axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return asioPublic;
};

export default useAxiosPublic;