import React from "react";
import JobSection from "@/ui/components/Careers/JobSection";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import axiosInstance from "@/constants/url";
import { GetServerSideProps } from "next";
import { JobOpening } from "@/constants/data";
import SEOHead from "@/ui/components/SEO/SEOHead";

interface CareersPageProps {
  initialJobs: {
    data: {
      data: JobOpening[];
    };
  } | null;
}

const CareersPage = ({ initialJobs }: CareersPageProps) => {
  const jobs = initialJobs?.data?.data || [];

  const jobListingsStructuredData = jobs.map((job) => ({
    "@type": "JobPosting",
    title: job.role,
    description: job.summary,
    datePosted: new Date().toISOString(),
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: job.employment_type,
    hiringOrganization: {
      "@type": "Organization",
      name: "Spikk",
      sameAs: "https://spikk.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.job_location,
        addressCountry: "NG",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Nigeria",
    },
  }));

  return (
    <>
      <SEOHead
        title='Careers at Spikk - Join Our Team and Build the Future of E-commerce'
        description="Join Spikk's dynamic team and help shape the future of e-commerce in Nigeria. Explore exciting career opportunities in technology, operations, marketing, and more. Apply now!"
        keywords='Spikk careers, job opportunities, Nigeria jobs, e-commerce careers, technology jobs, marketing jobs, operations jobs, join Spikk team'
        image='/images/png/Assistance.png'
        url='https://spikk.com/careers'
        type='website'
        tags={["careers", "jobs", "employment", "Nigeria", "e-commerce", "technology"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Spikk",
          url: "https://spikk.com",
          logo: "https://spikk.com/images/svg/Spikk-logo.svg",
          sameAs: ["https://linkedin.com/company/spikk", "https://facebook.com/spikk", "https://twitter.com/spikk"],
          jobPostings: jobListingsStructuredData,
        }}
      />
      <div className='bg-white font-gilroy relative'>
        <HomeHeader />
        <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
          <JobSection initialJobs={initialJobs} />
        </main>
        <HomeFooter />
      </div>
    </>
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
