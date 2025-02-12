import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"
const useTopFood = () => {

    const axiosPublic = useAxiosPublic();
    const {data: topFood=[], refetch, isLoading}= useQuery({
        queryKey: ['topFood'],
        queryFn: async () => {
            const res = await axiosPublic.get('/topFood');
            return res.data;
        }
    })

    return [topFood, refetch, isLoading];
};

export default useTopFood;