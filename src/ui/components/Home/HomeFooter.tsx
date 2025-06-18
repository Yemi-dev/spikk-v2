import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://wa.me/090123456789",
    label: "WhatsApp",
    icon: "/images/svg/Whatsapp.svg",
  },
  {
    href: "https://www.instagram.com/spikk.co/",
    label: "Instagram",
    icon: "/images/svg/Instagram.svg",
  },
  {
    href: "https://www.linkedin.com/company/spikk/",
    label: "LinkedIn",
    icon: "/images/svg/Linkedin.svg",
  },
];

const HomeFooter = () => {
  return (
    <footer className='bg-[#141414] text-white w-full py-16 px-6 md:px-10 lg:px-20'>
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12 md:gap-0'>
        {/* Logo */}
        <div className='flex-1 flex flex-col items-center md:items-start justify-start min-w-[180px]'>
          <Image src='/images/svg/SpikkFooterLogo.svg' alt='Spikk Logo' width={165} height={65} className='mb-2' />
        </div>

        {/* QuickLinks */}
        <div className='flex-1 flex flex-col items-center gap-2 min-w-[180px]'>
          <h4 className='text-lg font-medium mb-2 text-white'>QuickLinks</h4>
          <Link href='/home' className='text-gray300 hover:text-white text-base mb-1 transition'>
            Home
          </Link>
          <Link href='/home' className='text-gray300 hover:text-white text-base mb-1 transition'>
            Marketplace
          </Link>
          <Link href='/vendors' className='text-gray300 hover:text-white text-base transition'>
            For Vendors
          </Link>
        </div>

        {/* Lets chat */}
        <div className='flex-1 flex flex-col items-center md:items-end gap-2 min-w-[220px]'>
          <h4 className='text-lg font-medium mb-2 text-white'>Lets chat!</h4>
          <a href='mailto:spikk@email.com' className='text-gray300 hover:text-white text-base mb-1 transition'>
            spikk@email.com
          </a>
          <a href='tel:090123456789' className='text-gray300 hover:text-white text-base mb-3 transition'>
            090123456789
          </a>
          <div className='flex flex-row gap-4 mt-2'>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={item.label}
                className='rounded-full border border-gray500 hover:border-white p-2 transition-colors text-gray-300 hover:text-white'>
                <Image src={item.icon} alt={item.label} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 mt-10 mb-4' />

      {/* Bottom row */}
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400'>
        <Link href='/privacy-policy' className='hover:text-white transition mb-2 md:mb-0'>
          Privacy Policy
        </Link>
        <span className='text-soft400'>Copyright © {new Date().getFullYear()} Buimas</span>
      </div>
    </footer>
  );
};

export default HomeFooter;
