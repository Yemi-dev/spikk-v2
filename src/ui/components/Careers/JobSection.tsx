import React, { useEffect, useState } from "react";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import { JobOpening } from "@/constants/data";
import JobBadge from "@/ui/atoms/JobBadge";
import { useGetAllJobs } from "@/hooks/careers.hook";
import ApplyModal from "./ApplyModal";
import { FaAngleDown, FaArrowUp } from "react-icons/fa6";

interface JobSectionProps {
  initialJobs: {
    data: {
      data: JobOpening[];
    };
  } | null;
}

const JobSection = ({ initialJobs }: JobSectionProps) => {
  const { data: jobsData, isPending, isFetching } = useGetAllJobs();
  const jobs = jobsData?.data?.data || initialJobs?.data?.data;
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isJobListVisible, setIsJobListVisible] = useState(true);

  useEffect(() => {
    if (jobs) {
      setSelectedJob(jobs?.jobs[0]);
    }
  }, [jobs]);

  return (
    <div className='min-h-screen py-12 px-2 max-w-[1300px] mx-auto w-full'>
      <h2 className='text-2xl font-bold mb-4 text-black mt-16'>CAREER</h2>
      {jobs?.jobs?.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[60vh]'>
          <h3 className='text-2xl font-bold text-black mb-4'>No jobs found</h3>
          <p className='text-soft300 mb-4'>We are currently not hiring for any positions. Please check back later.</p>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row gap-10 mt-10'>
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsJobListVisible(!isJobListVisible)}
            className='md:hidden flex items-center justify-between w-full bg-white p-4 rounded-xl mb-4'>
            <span className='font-semibold'>Available Positions</span>
            {isJobListVisible ? <FaArrowUp size={20} /> : <FaAngleDown size={20} />}
          </button>

          {/* Left: Job List */}
          {isPending || isFetching ? (
            <div className='flex flex-col items-center justify-center w-2/5 sm:w-full h-full'>
              {/* Add a skeletal loader that mimichs the layout of the real data */}
              <div className='flex flex-col justify-center gap-4 w-full'>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-start justify-start bg-white border border-soft200 rounded-xl p-5 w-full h-[140px] shadow-sm gap-3'>
                    <div className='w-[150px] h-6 bg-soft200 animate-pulse rounded' />
                    <div className='w-24 h-6 bg-soft200 animate-pulse rounded' />
                    <div className='w-full h-6 bg-soft200 animate-pulse rounded' />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={`w-full md:w-2/5 flex flex-col gap-10 ${!isJobListVisible ? "hidden md:flex" : ""}`}>
              {jobs?.jobs?.map((job: JobOpening) => (
                <div
                  key={job.id}
                  className={`bg-white rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedJob?.id === job?.id ? "border border-gray300" : ""
                  }`}
                  onClick={() => setSelectedJob(job)}>
                  <h3 className='text-xl font-semibold text-black mb-2'>{job.role}</h3>
                  <div className='flex items-center gap-2 mb-2'>
                    <JobBadge color={colors.soft500}>{job.level}</JobBadge>
                    {job.workplace_type && <JobBadge color={colors.soft200}>{job.workplace_type}</JobBadge>}
                  </div>
                  <p className='text-soft400 text-sm line-clamp-2'>{job.main_responsibility}</p>
                </div>
              ))}
            </div>
          )}
          {/* Right: Job Details */}
          {isPending || isFetching ? (
            <div className='flex flex-col items-center justify-center w-3/5 h-full'>
              {/* Add a skeletal loader that mimichs the layout of the real data */}
              <div className='flex flex-col justify-center gap-4 w-full'>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-start justify-start bg-white rounded-xl p-5 w-full h-[140px] gap-3'>
                    <div className='w-[150px] h-6 bg-soft200 animate-pulse rounded' />
                    <div className='w-24 h-6 bg-soft200 animate-pulse rounded' />
                    <div className='w-full h-6 bg-soft200 animate-pulse rounded' />
                    <div className='w-full h-6 bg-soft200 animate-pulse rounded' />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='w-full md:w-3/5 bg-white rounded-xl px-8'>
              <h3 className='text-2xl font-bold text-black mb-3'>{selectedJob?.role}</h3>
              <div className='flex items-center gap-2 mb-4'>
                <JobBadge color={colors.gray200}>{selectedJob?.level}</JobBadge>
                {selectedJob?.workplace_type && (
                  <JobBadge color={colors.gray300}>{selectedJob?.workplace_type}</JobBadge>
                )}
              </div>
              <h4 className='font-semibold mb-2 text-black italic'>Primary Responsibility:</h4>
              <p className='text-soft300 mb-4 whitespace-pre-line'>{selectedJob?.main_responsibility}</p>
              <h4 className='font-semibold mb-2 text-black italic'>Job Specification:</h4>
              <ul className='list-disc pl-5 mb-4 text-soft300'>
                {/* {selectedJob.specs.map((spec, idx) => (

            ))} */}
                <li>{selectedJob?.job_spec}</li>
              </ul>
              <div className='mb-10 text-sm text-black mt-4'>
                <div className='flex flex-col items-start gap-1 mb-6'>
                  <span className='font-medium text-soft300'>Employment Type:</span> {selectedJob?.employment_type}
                </div>
                <div className='flex flex-col items-start gap-1 mb-6'>
                  <span className='font-medium text-soft300'>Work place Type:</span> {selectedJob?.workplace_type}
                </div>
                <div className='flex flex-col items-start gap-1 mb-6'>
                  <span className='font-medium text-soft300'>Salary:</span> {selectedJob?.summary}
                </div>
                <div className='flex flex-col items-start gap-1 mb-6'>
                  <span className='font-medium text-soft300'>Experience Required:</span>{" "}
                  {selectedJob?.experience_required}
                </div>
                <div className='flex flex-col items-start gap-1 mb-6'>
                  <span className='font-medium text-soft300'>Job Location:</span> {selectedJob?.job_location}
                </div>
              </div>
              <CustomButton
                onClick={() => setOpenModal(true)}
                className='mt-6 w-fit font-semibold hover:opacity-80 transition-all duration-200 ease-in-out rounded-xl'
                bgColor={colors.black}
                color={colors.white}>
                Apply Now
              </CustomButton>
            </div>
          )}
        </div>
      )}
      {openModal && selectedJob && <ApplyModal selectedJob={selectedJob} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default JobSection;
