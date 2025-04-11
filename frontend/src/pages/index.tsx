import Breakdown from "@/ui/components/Breakdown";
import Control from "@/ui/components/Control";
import FAQ from "@/ui/components/FAQ";
import Footer from "@/ui/components/Footer";
import Goal from "@/ui/components/Goal";
import Header from "@/ui/components/Header";
import Hero from "@/ui/components/Hero";
import CenterModal from "@/ui/components/modal/CenterModal";
import Waitlist from "@/ui/components/Waitlist";
import WaitlistForm from "@/ui/components/WaitlistForm";
import { useState } from "react";

export default function Home() {
  const [openWaitlist, setOpenWaitlist] = useState(false);
  return (
    <div className='bg-white font-delight'>
      <Header setOpenWaitlist={setOpenWaitlist} />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <div className='overlay'>
          <Hero setOpenWaitlist={setOpenWaitlist} />
        </div>
        <Goal />
        <Breakdown />
        <Control />
        <Waitlist setOpenWaitlist={setOpenWaitlist} />
        <FAQ />
      </main>
      <Footer setOpenWaitlist={setOpenWaitlist} />
      <CenterModal
        isOpen={openWaitlist}
        toggleModal={() => setOpenWaitlist(false)}
        bgcolor='#f8fafc'
        width='600px'
        padding='1rem'
        mainHeight='100vh'>
        <WaitlistForm onClose={() => setOpenWaitlist(false)} />
      </CenterModal>
    </div>
  );
}
