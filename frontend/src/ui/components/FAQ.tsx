import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is Finverse?",
      answer:
        "Finverse is a personal money management platform designed for African students and young professionals. It helps you set financial goals, create a monthly budget, and track your daily spending — all in one simple, empowering space.",
    },
    {
      id: 2,
      question: "How is Finverse different from savings or investment apps?",
      answer:
        "Unlike most financial apps that focus solely on saving or investing, Finverse helps you build the foundation that makes both possible. It's all about the habits — budgeting intentionally, spending wisely, and tracking your progress toward meaningful financial goals.",
    },
    {
      id: 3,
      question: "Who can use Finverse?",
      answer:
        "Finverse is created with young Africans in mind — especially students and early-career professionals who want to take control of their finances and make smarter money decisions.",
    },
    {
      id: 4,
      question: "When is Finverse launching?",
      answer:
        "We're working hard to bring Finverse to life! By joining the waitlist, you'll be the first to know when we go live — and you might even get early access to test the prototype.",
    },
    {
      id: 5,
      question: "How does money tracking on Finverse operate?",
      answer:
        "Finverse uses a manual, mindful approach to help you stay in control of your spending. Instead of syncing directly to your bank (which can make you feel less involved), Finverse sends gentle nudges to log your expenses daily — perfect for cash tracking.",
    },
    {
      id: 6,
      question: "Is Finverse free to use?",
      answer:
        "We plan to launch with a free version that gives you access to the core features. Premium features will be introduced later for those who want to unlock extra tools like expense splitting, multi-currency tracking, and joint financial management.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='max-w-[1200px] mx-auto mt-[4rem] px-4 sm:px-6 md:px-8 pb-16'>
      <div className='flex flex-col gap-8 items-center justify-center'>
        <h1 className='text-3xl md:text-4xl font-semibold max-w-[950px] mx-auto text-center'>
          Frequently Asked Questions (FAQs)
        </h1>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4'>
          {faqItems.map((item) => (
            <div key={item.id} className='border-b border-natural200 overflow-hidden transition-all duration-300'>
              <button
                className='flex items-center justify-between w-full p-4 md:p-6 text-left hover:bg-gray-50 transition-colors'
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={activeIndex === item.id}
                aria-controls={`faq-content-${item.id}`}>
                <h2 className='text-lg md:text-xl font-medium text-gray-900'>{item.question}</h2>
                <span className='ml-4 text-gray-500'>
                  {activeIndex === item.id ? <FiMinus className='w-5 h-5' /> : <FiPlus className='w-5 h-5' />}
                </span>
              </button>

              <div
                id={`faq-content-${item.id}`}
                className={`px-4 md:px-6 pb-4 md:pb-6 transition-all duration-300 ${
                  activeIndex === item.id ? "block opacity-100 max-h-[500px]" : "hidden opacity-0 max-h-0"
                }`}>
                <p className='text-natural700 sm:text-sm'>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
