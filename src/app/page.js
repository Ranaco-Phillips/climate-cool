import Link from 'next/link'
import Image from "next/image"

import Hero from '/public/Hero.png'
import ChooseUs from '/public/Choose-us.png'
import {choice, contact, services} from '/src/app/components/Data'

export default function Home() {


  return (
    <main className='overflow-x-hidden'>
        {/* Hero */}
        <section className='pt-16 pb-20 lg:pt-28 '>
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center relative">
              <div className="w-full md:w-9/12 p-4">
                <div>
                  <h1 className='text-center md:text-balance font-bold md:text-start text-4xl md:text-4xl xl:text-8xl 2xl:font-medium captialize'>
                    Transforming Spaces Enhancing Lives
                  </h1>
                  < p className="text-center md:text-2xl md:text-start leading-10 capitalize pt-3 md:pr-48">
                    Experience unparalleled comfort and convenience with our expert appliance services.
                  </p>
                </div>
                <div className='justify-center text-center md:text-start pt-5 md:pt-10'>
                    <button className='border-2 rounded-lg font-bold border-khaki bg-khaki text-gunmetal text-xl lg:text-base hover:text-khaki hover:bg-gunmetal transition-colors duration-300 py-2 px-4 lg:py-3 lg:px-8'>
                      Explore Our Services
                    </button>
                </div>
              </div>

              <div className=" w-full md:w-3/12 p-4">
                <Image 
                  priority 
                  src={Hero}
                  alt="Technician fixing AC unit" 
                  style={{width: '50%', height: 'auto',}}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='max-w-full h-auto pb-2 absolute md:-right-28 md:inset-y-24'
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us*/}

        <section id='about' className='relative pt-32 pb-16'>
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center md:justify-normal text-center md:text-start">
              <div className="w-full md:w-5/12 p-4 lg:pt-20">
                <h2 className='flex font-bold text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-medium captialize pt-1.5 lg:pb-4'>
                  Efficient. Effective. Eco-Friendly.
                </h2>
              </div>

              <div className="w-full md:w-7/12 p-4 lg:pt-20 lg:mt-36">
                <p className='text-xl md:text-2xl text-khaki font-bold italic'> 
                  At Climate-Cool Air-Conditioning, we understand the importance of keeping your environment comfortable and your appliances running smoothly. 
                  With years of experience in the industry, we specialize in the installation, repairs, and servicing of air conditioning units and refrigerators.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Services */}

        <section id='services' className='py-10'>
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full md:w-full p-4 lg:pt-20">
                <h2 className='flex font-bold text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-medium captialize pt-1.5 lg:pb-8'>
                  Improve Your Appliance&apos;s Efficiency And Sustainability With Our Services.
                </h2>

                <div className="flex flex-wrap justify-center ">
                  {
                    services.map(({icon, title, description}, index)=>(
                        <div  key={index} className="w-full md:w-1/2 lg:w-4/12 max-w-sm p-4 flex stretch-item ">
                            <div 
                              className={`pt-4 pb-10 px-4 justify-center items-center border  rounded-lg hover:shadow-md 
                                  ${index === 1 ? 'bg-gunmetal border-khaki text-almond':'bg-khaki border-khaki'}`
                            }>
                                <div>
                                    {/* <Image 
                                priority 
                                src={icon} 
                                alt="Wedding Icon" 
                                width={50} height={50} 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='max-w-full h-auto pb-2'
                                /> */}
                                </div>
                                
                                <div className=' text-center md:text-start'>
                                  <h5 className="mb-1 text-2xl font-bold pb-2">
                                      {title}
                                  </h5>
                                  <span className="text-medium text-lg">
                                      {description}
                                  </span>
                                </div>
                                
                            </div>
                        </div>
                    ))
                  }

                  <div className='my-12'>
                    <Link href='/#contact'>
                      <button className='flex aign-center bg-khaki border-2 border-khaki rounded-md hover:bg-gunmetal text-gunmetal hover:text-khaki font-bold text-xl lg:text-lg transition-colors duration-300  py-2 px-4 lg:py-3 lg:px-8'>
                        Schedule Your Service
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='pt-16 pb-20 lg:pt-28 '>
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 p-4 order-2">
                <div>
                  <h2 className='flex font-bold text-center justify-center md:text-start md:justify-normal text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-medium captialize pt-1.5 pb-4 lg:pb-4'>
                    Why Choose Us?
                  </h2>
                </div>
              </div>
              <div className=" w-full md:w-6/12 hidden md:block p-4 order-1"></div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 p-4 order-2 pt-72 md:pt-0">
                {
                  choice.map(({icon, title, description}, index)=>(
                    <div key={index} className={`flex flex-wrap md:flex-nowrap justify-center md:justify-start py-4 px-4 rounded-lg`}>
                      {/* <div className='pr-2'> bg-khaki border-2 border-khaki rounded-xl */}
                        <Image 
                          priority 
                          src={icon} 
                          alt="Icons" 
                          style={{width: '15%', height: 'auto',}}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={`md:pr-4 md:justify-center`}
                        />
                      {/* </div> */}
                      
                      <div className=' text-center md:text-start'>
                        <h5 className="mb-1 text-2xl font-bold pb-2">
                            {title}
                        </h5>
                        <span className="text-balance text-lg">
                            {description}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className=" w-full md:w-6/12 p-4 relative order-1">
                <div className='flex flex-wrap font-bold items-center justify-center border-2 rounded-full w-32 h-32 border-khaki bg-khaki absolute -right-4 md:right-40 z-10'>
                  <span className="text-3xl">20+</span>
                  <span className="text-center text-3xl">Years</span>
                </div>

                <Image 
                  priority 
                  src={ChooseUs}
                  alt="Technician fixing AC unit" 
                  style={{width: '100%', height: 'auto',}}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='max-w-full h-auto pb-2 absolute left-0 md:-left-20'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id='contact' className='py-10'>
          <div className="container mx-auto px-4 lg:px-16">
            <div className="flex flex-wrap justify-center md:justify-normal text-center md:text-start">
              <div className="w-full md:w-6/12 p-4 lg:pt-20">
                <h2 className='flex font-bold text-center justify-center md:justify-normal md:text-start text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-medium captialize py-1.5 lg:pb-8'>
                  Get In Touch With Us
                </h2>
                <p className='text-lg pb-5'>
                  Ready to experience unparalleled comfort and service? Contact us now 
                  to schedule your appointment and discover why we&apos;re the preferred choice 
                  for all your air conditioning and appliance needs
                </p>
                <div className="flex flex-wrap justify-center">
                  {
                    contact.map(({icon, title, description}, index)=>(
                      <div key={index} className={`flex flex-wrap flex-col md:flex-row justify-center md:justify-start py-4 px-4 rounded-lg`}>
                        {/* <div className=' '>  */}
                          <Image 
                            priority 
                            src={icon} 
                            alt="Icons" 
                            style={{width: '12%', height: 'auto',}}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`md:mr-4 p-2 md:justify-center bg-khaki border-2  border-khaki rounded-xl`}
                          />
                        {/* </div> */}
                        
                        <div className=' text-center md:text-start'>
                          <h5 className="mb-1 text-2xl font-bold pb-2">
                              {title}
                          </h5>
                          <span className="text-balance text-lg">
                              {description}
                          </span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="w-full md:w-6/12 p-4 lg:pt-20">
                <div className='bg-gunmetal px-14 py-12 rounded-xl'>
                  <form className="flex flex-wrap">
                    <div className="w-full md:w-full">
                        <label className="block uppercase tracking-wide text-xs text-khaki font-bold mb-2" htmlFor="grid-first-name">
                          Name
                        </label>
                        <input className="appearance-none block w-full border-b-2 border-b-zinc rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gold" id="grid-first-name" type="text" placeholder="Jane Doe"/>
                    
                        <label className="block uppercase tracking-wide text-xs text-khaki font-bold mb-2" htmlFor="grid-email">
                        Email
                        </label>
                        <input className="appearance-none block w-full border-b-2 border-b-zinc rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gold" id="grid-email" type="email" placeholder="jane.doe@example.com" />
                    
                        <label className="block uppercase tracking-wide text-xs text-khaki font-bold mb-2" htmlFor="grid-phone">
                        Phone
                        </label>
                        <input className="appearance-none block w-full border-b-2 border-b-zinc rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gold" id="grid-phone" type="tel" placeholder="123-456-7890" />
                          
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-khaki dark:text-khaki">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gunmetal rounded-lg border border-gunmetal focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:gunmetal dark:focus:ring-khaki dark:focus:border-khaki" placeholder="Write your thoughts here..."></textarea>

                    </div>

                    <div className="w-full md:w-full justify-center text-center py-8 px-3">
                        <button className='border-2 bg-khaki border-khaki text-xl lg:text-base py-2 px-4 lg:py-3 lg:px-8 mt-5 rounded-md hover:bg-gray-800 hover:text-zinc transition-colors duration-300'>
                            Send Message
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
   
  );
}
