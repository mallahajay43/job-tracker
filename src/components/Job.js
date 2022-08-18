import React from "react";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setEditJob, deleteJob } from "../features/job/jobSlice";

const Job = ({
  _id,
  company,
  position,
  jobLocation,
  jobType,
  status,
  createdAt,
}) => {
  const date = moment(createdAt).format("MMM Do YYYY");
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    company,
                    position,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              {" "}
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
