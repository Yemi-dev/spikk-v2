import { colors } from "@/constants/colors";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import CustomTextInput from "../atoms/inputs/CustomTextField";
import CustomButton from "../atoms/CustomButton";
import { GoArrowUpRight } from "react-icons/go";
import CustomSelectInput from "../atoms/inputs/CustomSelectInput";
import { features, success, survey } from "@/constants/data";
import { useFormik } from "formik";
import * as Yup from "yup";
import { countries } from "@/constants/countries.data";
import { useCreateWaitlist, useGetWaitlist } from "@/hooks/waitlist.hook";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Email is required"),
  feature: Yup.string().required("Please select a feature"),
  alternatives: Yup.string().required("Please select an alternative"),
  success: Yup.string().required("Please select a success metric"),
  country: Yup.string().required("Please select a country"),
  price: Yup.number().required("Please enter a price").min(0, "Price must be greater than or equal to 0"),
});

const WaitlistForm = ({ onClose }) => {
  const { mutate, isLoading } = useCreateWaitlist();
  const { data = [], isLoading: dataLoading } = useGetWaitlist({ page: 1 });
  console.log("Waitlist data:", data);
  const [isSuccess, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      feature: "",
      alternatives: "",
      success: "",
      country: "",
      price: 0,
      otherFinancialApp: "",
      otherSuccessMetric: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const submissionValues = {
          ...values,
          otherFinancialApp: values.alternatives === "Other" ? values.otherFinancialApp : undefined,
          otherSuccessMetric: values.success === "Other" ? values.otherSuccessMetric : undefined,
        };

        mutate(submissionValues, {
          onSuccess: (data) => {
            console.log("Success:", data);
            toast.success(`${data.data.message}`);
            resetForm();
            setSuccess(true);
          },
          onError: (e) => {
            console.log("Error:", e);
            toast.error(e.response.data.message);
          },
        });
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {isSuccess ? (
        <div className='flex flex-col gap-4 px-[20px] py-6 text-textDark min-h-[350px] sm:px-4'>
          <MdClose
            size={30}
            className='ml-auto cursor-pointer'
            onClick={() => {
              setSuccess(false);
              onClose();
            }}
            color={colors.textDark}
          />
          <div className='flex flex-col items-center justify-center h-full'>
            <h2 className='text-4xl font-semibold'>🎉</h2>
            <h2 className='text-4xl font-semibold mt-2 sm:text-2xl'>Congratulations!</h2>
            <p className='mt-4 text-textGray text-center sm:text-sm'>
              You have successfully joined the wailtlist, and you will be notified of any updates.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 px-[20px] py-6 sm:px-1'>
          <MdClose size={30} className='ml-auto cursor-pointer' onClick={onClose} color={colors.textDark} />
          <h1 className='text-textDark text-4xl font-medium sm:text-2xl'>Join Our waitlist</h1>

          <div className='w-full max-h-[55vh] overflow-auto my-4 remove-scroll'>
            <CustomTextInput
              name='email'
              label='Email Address'
              labelColor='text-textDark'
              placeholder='Enter your email'
              type='email'
              padding='px-[20px] py-[15px]'
              borderRadius='rounded-[40px]'
              focusBorderColor='border-textDark'
              widthInPercentage={100}
              className='waitlist-input'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.email && formik.errors.email}
            />

            <CustomSelectInput
              name='feature'
              placeholder='Select feature type'
              label='Which feature would you prioritize the most?'
              options={features}
              value={formik.values.feature}
              onChange={(e) => formik.setFieldValue("feature", e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.feature && formik.errors.feature}
              height='h-[55px]'
              borderRadius='rounded-[40px]'
            />

            <CustomSelectInput
              name='alternatives'
              placeholder='Select alternative'
              label={`If Finverse didn't exist, what alternative product would you use?`}
              options={survey}
              value={formik.values.alternatives}
              onChange={(e) => {
                formik.setFieldValue("alternatives", e.target.value);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.alternatives && formik.errors.alternatives}
              height='h-[55px]'
              borderRadius='rounded-[40px]'
            />

            {formik.values.alternatives === "Other" && (
              <CustomTextInput
                name='otherFinancialApp'
                label='Other Financial App'
                labelColor='text-textDark'
                placeholder='Enter the other financial app'
                type='text'
                padding='px-[20px] py-[15px]'
                borderRadius='rounded-[40px]'
                focusBorderColor='border-textDark'
                widthInPercentage={100}
                className='waitlist-input'
                value={formik.values.otherFinancialApp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.otherFinancialApp && formik.errors.otherFinancialApp}
              />
            )}

            <CustomSelectInput
              name='success'
              placeholder='Select success metric'
              label='What would success look like for you when using Finverse?'
              options={success}
              value={formik.values.success}
              onChange={(e) => {
                formik.setFieldValue("success", e.target.value);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.success && formik.errors.success}
              height='h-[55px]'
              borderRadius='rounded-[40px]'
            />

            {formik.values.success === "Other" && (
              <CustomTextInput
                name='otherSuccessMetric'
                label='Other Success Metric'
                labelColor='text-textDark'
                placeholder='Enter the other success metric'
                type='text'
                padding='px-[20px] py-[15px]'
                borderRadius='rounded-[40px]'
                focusBorderColor='border-textDark'
                widthInPercentage={100}
                className='waitlist-input'
                value={formik.values.otherSuccessMetric}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.otherSuccessMetric && formik.errors.otherSuccessMetric}
              />
            )}
            <CustomTextInput
              name='price'
              label='How much would you be willing to pay for a monthly subscription ($)?'
              labelColor='text-textDark'
              placeholder='Enter amount'
              type='number'
              padding='px-[20px] py-[15px]'
              borderRadius='rounded-[40px]'
              focusBorderColor='border-textDark'
              widthInPercentage={100}
              className='waitlist-input'
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.price && formik.errors.price}
            />

            <CustomSelectInput
              name='country'
              placeholder='Select your country'
              label='Nationality'
              options={countries}
              value={formik.values.country}
              onChange={(e) => formik.setFieldValue("country", e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.country && formik.errors.country}
              height='h-[55px]'
              borderRadius='rounded-[40px]'
            />
          </div>

          <CustomButton
            type='submit'
            padding='10px 1.5rem'
            className='hidden md:block font-semibold text-lg'
            isLoading={isLoading}
            disabled={formik.isSubmitting || !formik.isValid}>
            {formik.isSubmitting || isLoading ? "Submitting..." : "Join the waitlist"}
            {!formik.isSubmitting && <GoArrowUpRight size={20} className='font-light' />}
          </CustomButton>
        </form>
      )}
    </>
  );
};

export default WaitlistForm;
