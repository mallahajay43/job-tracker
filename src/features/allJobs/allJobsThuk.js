import customeFetch, {checkForUnauthorizedResponse} from "../../utils/axios";

export const getAllJobsThunk= async (_, thunkAPI)=>{
    const {search, searchStatus, searchType, page, sort}=thunkAPI.getState().allJobs;
    
    let url=`/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if(search){
        url=url + `&search=${search}`;
    }

    try {
        const resp=await customeFetch.get(url)
        // console.log(resp.data);
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);   
    }
}

export const showStatsThunk=async (_, thunkAPI) =>{
    try {
        const resp=await customeFetch.get('/jobs/stats');
        console.log(resp.data);
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}