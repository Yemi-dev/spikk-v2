import { colors } from "@/constants/colors";

import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";

const Blog = () => {
  const router = useRouter();
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <div className='w-full my-10 pt-20 max-w-[1300px] mx-auto px-12 sm:px-6'>
          <button className='flex items-center gap-2  justify-start w-full mb-12' onClick={() => router.back()}>
            <FaAngleLeft size={18} />
            <h2 className='text-2xl font-bold'>BLOGS</h2>
          </button>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold'>GETTING STARTED WITH SPIKK. SHOP ANYTHING, SEND ANYTHING.</h3>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex gap-4 items-center'>
                    <div className='text-sm text-gray400 font-medium'> 29/03/2025</div>
                    <div className='flex gap-2 items-center text-sm text-gray400 font-medium'>
                      <LuClock4 /> <span>10 MIN READ</span>
                    </div>
                  </div>
                  <div className='flex gap-2 items-center text-sm text-gray400 font-medium'>
                    <FaRegComment />
                    <span>10 Comments</span>
                  </div>
                </div>
              </div>
              <Image
                src='/images/blogs/blog-1.png'
                alt='blog-1'
                width={100}
                height={100}
                className='w-full h-[400px] object-cover bg-gray300 rounded-lg'
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='mt-16'>
                <h2 className='text-2xl font-black'>COMMENTS</h2>
                <div className='my-8'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-start w-full'>
                      <Image
                        src='/images/blogs/blog-1.png'
                        style={{ backgroundColor: colors.gray300 }}
                        alt='blog-1'
                        width={56}
                        height={56}
                        className='rounded-full'
                      />
                      <div className='flex flex-col gap-2 w-full'>
                        <h5 className='text-lg font-bold'>John Doe</h5>
                        <p className='text-sm text-black w-full'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
};

export default Blog;
