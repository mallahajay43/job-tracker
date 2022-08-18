import customeFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobSilce";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (url, job, thunkAPI) => {
  try {
    const resp = await customeFetch.post(url, job);
    thunkAPI.dispatch(clearValues());
    return resp.data.msg;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk=async (url,thunkAPI)=>{
    thunkAPI.dispatch(showLoading());
    try {
        const resp=await customeFetch.delete(url);
        thunkAPI.dispatch(getAllJobs());
        return resp.data.msg;
    } catch (error) {
        thunkAPI.dispatch(hideLoading());
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}

export const editJobThunk=async (url, job, thunkAPI)=>{
    try {
        const resp=await customeFetch.patch(url, job);
        thunkAPI.dispatch(clearValues());
        return resp.data.msg;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}
