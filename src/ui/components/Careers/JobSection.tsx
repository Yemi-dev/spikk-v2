import React, { useState } from "react";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import { JobOpening, jobOpenings } from "@/constants/data";
import JobBadge from "@/ui/atoms/JobBadge";

const JobSection = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening>(jobOpenings[0]);
 
  return (
    <div className='min-h-screen py-12 px-2 max-w-[1300px] mx-auto'>
      <h2 className='text-2xl font-bold mb-4 text-black mt-16'>CAREER</h2>
      <div className='flex flex-col md:flex-row gap-10 mt-10'>
        {/* Left: Job List */}
        <div className='w-full md:w-1/2 flex flex-col gap-10'>
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className={`bg-white rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedJob.id === job.id ? "border border-soft300" : ""
              }`}
              onClick={() => setSelectedJob(job)}>
              <h3 className='text-lg font-semibold text-black mb-1'>{job.title}</h3>
              <div className='flex items-center gap-2 mb-2'>
                <JobBadge color={colors.gray200}>{job.level}</JobBadge>
                {job.remote && <JobBadge color={colors.gray300}>Remote</JobBadge>}
              </div>
              <p className='text-gray-500 text-sm line-clamp-2'>{job.summary}</p>
            </div>
          ))}
        </div>
        {/* Right: Job Details */}
        <div className='w-full md:w-1/2 bg-white rounded-xl p-8'>
          <h3 className='text-xl font-bold text-black mb-2'>{selectedJob.title}</h3>
          <div className='flex items-center gap-2 mb-4'>
            <JobBadge color={colors.gray200}>{selectedJob.level}</JobBadge>
            {selectedJob.remote && <JobBadge color={colors.gray300}>Remote</JobBadge>}
          </div>
          <h4 className='font-semibold mb-2 text-black'>Primary Responsibility:</h4>
          <p className='text-gray-700 mb-4 whitespace-pre-line'>{selectedJob.details}</p>
          <h4 className='font-semibold mb-2 text-black'>Job Specification:</h4>
          <ul className='list-disc pl-5 mb-4 text-gray-700'>
            {selectedJob.specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
          <div className='mb-2 text-sm text-black'>
            <div className='flex flex-col items-start gap-1 mb-6'>
              <span className='font-semibold text-black'>Employment Type:</span> {selectedJob.employmentType}
            </div>
            <div className='flex flex-col items-start gap-1 mb-6'>
              <span className='font-semibold text-black'>Work place Type:</span> {selectedJob.workType}
            </div>
            <div className='flex flex-col items-start gap-1 mb-6'>
              <span className='font-semibold text-black'>Salary:</span> {selectedJob.salary}
            </div>
            <div className='flex flex-col items-start gap-1 mb-6'>
              <span className='font-semibold text-black'>Experience Required:</span> {selectedJob.experience}
            </div>
            <div className='flex flex-col items-start gap-1 mb-6'>
              <span className='font-semibold text-black'>Job Location:</span> {selectedJob.location}
            </div>
          </div>
          <CustomButton className='mt-6 w-full font-semibold' bgColor={colors.black} color={colors.white}>
            Apply Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
