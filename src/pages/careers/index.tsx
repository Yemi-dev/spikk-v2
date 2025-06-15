import React from "react";
import JobSection from "@/ui/components/Careers/JobSection";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import axiosInstance from "@/constants/url";
import { GetServerSideProps } from "next";
import { JobOpening } from "@/constants/data";

interface CareersPageProps {
  initialJobs: {
    data: {
      data: JobOpening[];
    };
  } | null;
}

const CareersPage = ({ initialJobs }: CareersPageProps) => {
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <JobSection initialJobs={initialJobs} />
      </main>
      <HomeFooter />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<CareersPageProps> = async () => {
  try {
    const response = await axiosInstance.get("career/all");
    return {
      props: {
        initialJobs: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return {
      props: {
        initialJobs: null,
      },
    };
  }
};

export default CareersPage;
