import React from "react";
import CenterModal from "../Modal/CenterModal";
import CustomTextInput from "@/ui/atoms/inputs/CustomTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import { useApplyJob } from "@/hooks/careers.hook";
import { toast } from "react-toastify";
import { JobOpening } from "@/constants/data";

const ApplyModal = ({
  selectedJob,
  setOpenModal,
}: {
  selectedJob: JobOpening;
  setOpenModal: (open: boolean) => void;
}) => {
  const { mutate: applyJob, isPending } = useApplyJob(selectedJob?.id);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      resume: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      resume: Yup.string().required("Link to resume is required"),
    }),
    onSubmit: (values: { name: string; email: string; resume: string }, { resetForm }: { resetForm: () => void }) => {
      applyJob(values, {
        onSuccess: () => {
          toast.success("Job applied successfully");
          setOpenModal(false);
          resetForm();
        },
        onError: () => {
          toast.error("Failed to apply for job");
        },
      });
    },
  });
  const isDisabled = isPending || formik.isSubmitting || formik.isValid;

  return (
    <CenterModal width='600px' toggleModal={() => setOpenModal(false)} isOpen={true}>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full max-w-xl mx-auto'>
        <h1 className='text-2xl font-bold text-soft300'>Apply for {selectedJob?.role}</h1>
        <p className='text-sm text-soft400'>Please fill out the form below to apply for this job.</p>
        <CustomTextInput
          name='name'
          label='Full Name'
          placeholder='Full Name'
          type='text'
          bgColor='bg-white'
          className='text-base text-textDark'
          borderRadius='rounded-lg'
          padding='p-4'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <CustomTextInput
          name='email'
          label='Email Address'
          placeholder='Email Address'
          type='email'
          bgColor='bg-white'
          className='text-base text-textDark'
          borderRadius='rounded-lg'
          padding='p-4'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <CustomTextInput
          name='resume'
          label='Link to resume'
          placeholder='Link to resume'
          type='text'
          bgColor='bg-white'
          className='text-base text-textDark mb-8'
          borderRadius='rounded-lg'
          padding='p-4'
          value={formik.values.resume}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.resume && formik.errors.resume}
        />
        <CustomButton
          type='submit'
          disabled={isDisabled}
          color={colors.white}
          className={`w-fit font-semibold rounded-xl ${
            isPending ? "bg-gray400 text-white" : "bg-black hover:bg-black hover:opacity-80"
          } transition-all duration-200 ease-in-out w-[200px]`}
          isLoading={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </CustomButton>
      </form>
    </CenterModal>
  );
};

export default ApplyModal;
