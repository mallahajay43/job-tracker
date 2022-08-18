import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainer, Loading, StatsContainer } from '../../components';
import { showStats } from '../../features/allJobs/allJobSilce';

const Stats = () => {
    const {isLoading, monthlyApplications}=useSelector((store)=>store.allJobs);
    const dispatch =useDispatch();

    useEffect(()=>{
        // dispatch(getAllJobs());
        dispatch(showStats());
    }, [])

    if(isLoading){
        return <Loading />
    }
    return (<>
            <StatsContainer />
            {monthlyApplications.length && <ChartsContainer/>}
        </>
    )
}

export default Stats
