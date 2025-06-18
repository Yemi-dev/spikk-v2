import { colors } from "@/constants/colors";
import CustomButton from "@/ui/atoms/CustomButton";
import CustomTextInput from "@/ui/atoms/inputs/CustomTextField";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextArea from "@/ui/atoms/inputs/CustomTextArea";
import { useContactUs } from "@/hooks/contact.hook";
import { toast } from "react-toastify";

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const { mutate: sendRequest, isPending } = useContactUs();
  const formik = useFormik<ContactFormData>({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      sendRequest(values, {
        onSuccess: (data) => {
          toast.success(data.data.message);
          resetForm();
        },
        onError: (error: unknown) => {
          const errorMessage =
            error && typeof error === "object" && "response" in error
              ? (error.response as any)?.data?.message
              : "An error occurred";
          toast.error(errorMessage);
        },
      });
    },
  });

  return (
    <div id='register' className='w-full max-w-6xl bg-[#323232] rounded-2xl px-6 py-12 mt-[100px]'>
      <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-8 pb-4'>
        CONTACT US FOR BUSINESS PARTNERSHIPS
      </h2>
      <div className='flex flex-col-reverse lg:flex-row gap-8 justify-center lg:items-start items-center'>
        <div className='flex-1 w-full mx-auto'>
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full max-w-xl mx-auto'>
            <CustomTextInput
              name='name'
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

            <CustomTextArea
              name='message'
              placeholder='Message'
              bgColor='bg-white'
              className='text-base text-textDark'
              borderRadius='rounded-lg'
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.message && formik.errors.message}
            />
            <div className='mt-6 flex justify-center'>
              <CustomButton
                bgColor={colors.textYellow}
                color={colors.textDark}
                className='font-semibold text-base px-10 py-3 w-full lg:w-[340px] rounded-lg hover:opacity-90 transition-all'
                borderRadius='8px'
                type='submit'>
                {isPending ? "SUBMITTING..." : "SUBMIT DETAILS"}
              </CustomButton>
            </div>
          </form>
        </div>
        <div className='flex-1'>
          <div className='w-[400px] h-[270px] md:w-[500px] md:h-[270px] lg:w-[500px] lg:h-[270px] rounded-xl overflow-hidden'>
            <Image
              src='/images/png/ContactRight.png'
              alt='Business partnership'
              width={500}
              height={270}
              className='object-cover object-top w-full h-full rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
