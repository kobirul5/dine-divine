import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://assignment-11-server-neon-eta.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;