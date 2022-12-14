import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from "./allJobsThuk";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialFilterState={
    search:'',
    searchStatus:'all',
    searchType:'all',
    sort:'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState={
    isLoading:true,
    jobs:[],
    totalJobs:0,
    numOfPages:1,
    page:1,
    stats:{},
    monthlyApplications:[],
    ...initialFilterState,
}

export const getAllJobs=createAsyncThunk('allJobs/getAllJobs', getAllJobsThunk)

export const showStats=createAsyncThunk('allJobs/stats', showStatsThunk)

const allJobSlice=createSlice({
    name:'allJobs',
    initialState,
    reducers:{
        showLoading:(state)=>{
            state.isLoading=true;
        },
        hideLoading: (state)=>{
            state.isLoading=false;
        },
        handleChange: (state, {payload: {name, value}})=>{
            state.page=1;
            state[name]=value;
        },
        clearFilters:(state)=>{
            return {...state, ...initialFilterState};
        },
        changePage:(state, {payload})=>{
            state.page=payload;
        },
        clearAllJobsState:(state)=> {
            return {...state, ...initialFilterState}
        }
    },
    extraReducers:{
        [getAllJobs.pending]:(state)=>{
            state.isLoading=true;
        },

        [getAllJobs.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.jobs=payload.jobs;
            state.totalJobs=payload.totalJobs;
            state.numOfPages=payload.numOfPages;
        },

        [getAllJobs.rejected]:(state, {payload})=>{
            state.isLoading=false;
            toast.error(payload);
        },

        [showStats.pending]:(state)=>{
            state.isLoading=true;
        },

        [showStats.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.stats=payload.defaultStats;
            state.monthlyApplications=payload.monthlyApplications;
        },

        [showStats.rejected]:(state, {payload})=>{
            state.isLoading=false;
            toast.error(payload);
        },

    }
})

export const {showLoading, hideLoading, handleChange ,clearFilters, changePage, clearAllJobsState} = allJobSlice.actions;
export default allJobSlice.reducer;