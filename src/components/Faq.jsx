import React, { useState } from 'react'
import faq from '../assets/images/faq.svg';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

    const [activeFeature, setActiveFeature] = useState(-1);

    const faqs = [
        {
            title: 'What is Fractional Investment',
            desc: `
            Fractional investment in real estate is an innovative way to invest in property without purchasing the entire asset. It allows multiple investors to collectively own a portion of a property. This fractional real estate investment will get you recurring rental income and a possible appreciation if you decide to sell your share. 
            `
        },
        {
            title: 'What are the benefits of fractional real estate investment',
            desc: `
            It allows investment in multiple properties with lower capital requirements. It gives Investors access to high-value properties they might not ordinarily be able to afford as a whole. Fractional gives a much higher return on investments  with capital appreciation possibility.
            `
        },
        {
            title: 'What are the risks associated with fractional real estate investment',
            desc: 'Property value can change due to a couple of external factors. However, some properties depreciate due to natural disasters and economic downturns.'
        },
        // {
        //     title: 'Which property am I investing in and where is it located',
        //     desc: 'The property is a 3 bedroom fully furnished and serviced apartment located at Plot 10 Cadastral Zone B11, Kaura District (Directly opposite Benford International School and near Suncity Estate) Abuja, Nigeria.'
        // },
        // {
        //     title: 'What is the difference between REIT and Fractional Investment',
        //     desc: 'REIT investment have a fixed return over a period of time without any capital appreciation while Fractional investment returns fluctuates based on use of the property and also do have capital appreciation.'
        // },
        {
            title: 'What if I want to sell or i am no longer interested in keeping my fraction',
            desc: 'Investors can sell their shares whenever they wish and a return of their full initial deposit is guaranteed, giving a 30 days notice.'
        },
        {
            title: 'When will I start earning rental income from this propery',
            desc: 'Once a property is used you will receive a notification on your dashboard regarding your earnings. Payouts are processed weekly as income  is reported.'
        },
        {
            title:'What legal structure applies to fractional by Roomeo',
            desc:'All our properties are registered individually in the form of limited liability companies. This implies that our subscribers will be registered as shareholders of the properties with the relevant regulatory authority.'
        }
    ]

    return (
        <div className='max-w-[1200px] px-10 mx-auto !pt-24' id='faq'>
            <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
                <div className="flex lg:block flex-col items-center">
                    <p className="text-6xl text-primary-red !font-semibold">FAQs</p>
                    <p className='text-xl !font-semibold mt-2'>We are always here for our subscribers</p>
                    <img className='mt-10' src={faq} alt="faq" />
                </div>
                <div className="">
                    {faqs.map((feature, idx) => (
                        <div
                            data-aos="fade-up"
                            className="border rounded-lg px-3 sm:px-5 mb-3 w-full text-sm"
                            key={idx}
                        >
                            <button
                                onClick={() =>
                                    activeFeature == idx
                                        ? setActiveFeature(-1)
                                        : setActiveFeature(idx)
                                }
                                className="w-full py-3 flex justify-between items-center gap-3 sm:gap-10"
                            >
                                <div className="flex flex-1 items-center gap-3">
                                    <p className="pl-3 text-left text-sm font-semibold">
                                        {" "}
                                        {feature.title}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 grid place-content-center p-2 `}>
                                    <IoIosArrowDown size={20}
                                        className={`ml-0.5 transition-transform duration-300 ease-linear ${activeFeature === idx && "rotate-180"
                                            }`}
                                    />
                                </div>
                            </button>
                            {activeFeature === idx ? (
                                <p className="pb-7 pr-0 sm:pr-14 pt-3 pl-3  border-t" dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
