import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";

const PrivacyPolicy = () => {
  const privacyData = [
    {
      heading: "INTRODUCTION",
      content:
        "Your privacy is important to Spikk. We follow closely the laws and ensure legality. We endeavor to keep your personal information protected at all times by implementing adequate technical and organizational controls. Please take a moment to read the following policy to learn how we handle your personal information, as your use of our services will indicate your acceptance of its content.",
    },
    {
      heading: "PURPOSE OF COLLECTION",
      content:
        "We collect and use your personal information to satisfy legal and regulatory requirements; for historical and statistical purposes; for security and control and for the smooth provision of our services. From time to time, we may also use your personal information to contact you by mail, email, telephone or mobile phone to introduce you to our products or any events, activities, projects, plans, developments, undertakings and special offers taking place, being promoted or supported by Spikk. The data supplied by you upon registering online or thereafter shall be kept by Spikk and will solely by used to determine the legality of registration and activity on the Website. By supplying us with your information you confirm that you do not consider use of your information in accordance with this Privacy Policy to be a breach of your rights under “The Act”. We encourage you to contact us at any time and remind you of your right to opt out at any time from receiving any promotional or marketing materials from us.",
    },
    {
      heading: "PROTECTION OF INFORMATION",
      content:
        "The Management of Spikk together with the Fraud Team will have the right to access the submitted personal information relating to the registered players. You always have a right of access the information we have about you. To review and update your personal contact information, simply contact Spikk and you will be provided with information about your personal data we hold. If you prefer you may contact our Customer Service using the contact details available on the site. Additionally, you have the right to have any inaccurate information corrected and where applicable, erased. It is our right to ask you to provide us with a written request for information we hold about you.",
    },
    {
      heading: "COMMITMENT TO PRIVACY",
      content:
        "To make sure your personal information remains confidential; we communicate these privacy guidelines to every Spikk employee. Spikk’s Website may, from time to time, contain links to other sites. Spikk does not share your personal information with those websites and is not responsible for their privacy practices. We encourage you to learn about the privacy policies of any such company. If we are going to use your personal information differently from that stated at the time of collection, we will inform you accordingly. Spikk’s Privacy Policy is subject to change at any time. It is in your interest to review the privacy policy regularly for any changes.",
    },
    {
      heading: "CONTACT US",
      content:
        "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at hi@spikk.com",
    },
  ];
  const router = useRouter();
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <div className='w-full my-10 pt-20 max-w-[1300px] mx-auto px-12 sm:px-6'>
          <button className='flex items-center gap-2  justify-start w-full mb-12' onClick={() => router.back()}>
            <FaAngleLeft size={18} />
            <h2 className='text-2xl font-bold'>PRIVACY POLICY</h2>
          </button>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold uppercase'>Read about: Privacy Policy on Restricted Items.</h3>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex gap-4 items-center'>
                    <div className='text-sm text-gray400 font-medium'> 29/03/2025</div>
                    <div className='flex gap-2 items-center text-sm text-gray400 font-medium'>
                      <LuClock4 /> <span>5 MIN READ</span>
                    </div>
                  </div>
                  <div className='flex gap-2 items-center text-sm text-gray400 font-medium'>
                    <FaRegComment />
                    <span>10 Comments</span>
                  </div>
                </div>
              </div>
              <p>
                This Privacy Policy is agreed between you and Spikk’s corporate entities (‘Spikk’, ‘We’, ‘Us’ or ‘Our’
                as appropriate). Spikk will only process your personal data for the purposes for which it collected it,
                namely to provide you with an on-demand errand or delivery service.
              </p>
              {privacyData.map((item, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <h3 className='text-lg font-bold uppercase'>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
};

export default PrivacyPolicy;
