import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
        <div className='relative text-white'>
            <div className='h-192'>
                <img className="brightness-65 object-cover object-center w-full h-full " src="https://rrarchitects.sa/storage/1371/Floating-villa_ext_cam02.jpg"/>
            </div>
            <div className='absolute px-40 inset-x-0 top-0 flex justify-between items-center border-b border-stone-400'>
                <div>
                    <p className='text-4xl'>Logo</p>
                </div>
                <div className='space-x-40'>
                    <a href="">About us</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </div>
                <div className='border-l border-stone-400 py-5 pl-4'>
                    <p>+1 310 998 13 55</p>
                    <p>+1 321 998 14 55</p>
                </div>
            </div>
            <div className='absolute pl-40 inset-0 py-80 w-2/5'>
                <p className=' text-5xl font-semibold leading-normal'>Your Dream House Is Already Waiting</p>
                <p className='text-2xl'>This is the best time for changing life</p>
                <button className='bg-yellow-700 py-3 px-10 mt-10 text-lg'>Order project</button>
            </div>
        </div>
        <div className='mt-36 flex px-40 w-full'>
            <div className='h-160 w-2/5'>
                <img className="w-full h-full object-center object-cover" src="https://www.habbinson.com/wp-content/uploads/2020/12/h8zzPl7mwOEfDPhQGyspAOz2uIHhOZMQcW-pzm2Lc-A-1-2048x1366.jpg"/>
            </div>
            <div className='w-3/5 mt-12'>
                <div className='bg-gray-100 py-14 pl-8 pr-12'>
                    <div className='flex justify-center'>
                        <p className='text-5xl pb-6'>About us</p>
                    </div>
                    <div>
                        <p className='text-left'>Eco LIFE - is an architectural bureau and multidisciplinary construction company, which works with customers from all over the world. Inspiration of creation concept was served by the original archtecture rules of the House: geometric elements of the facade is engaging the attention, light and spacious placements with high ceilling refer to aestetic of american art - deco style.<br/><br/> The best architects in the world are working on unique projects that are distinguished by their modernity and environmental friendliness. Our advantages are confirmed by many years of successful experience and thousands of happy customers</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 pl-8 pr-12 py-10'>
                    <div className='flex items-center pb-6'><p className='text-5xl text-yellow-700 pr-3'>750</p><p>Successful projects</p></div>
                    <div className='flex items-center pb-6'><p className='text-5xl text-yellow-700 pr-3'>18</p><p>Years of experience</p></div>
                    <div className='flex items-center'><p className='text-5xl text-yellow-700 pr-3'>120</p><p>Cities are built up</p></div>
                    <div className='flex items-center'><p className='text-5xl text-yellow-700 pr-3'>15</p><p>Best european architects</p></div>
                </div>
            </div>
        </div>
        <div className='mt-36 flex px-40 w-full'>
            <div className='w-2/5'>
                <div className='pb-6'>
                    <p className='text-5xl pb-3'>Our Projects</p>
                    <p className='text-yellow-700'>Choose your future house</p>
                </div>
                <div className=''>
                    <p className='text-3xl font-medium pb-2'>Premium Eco house BRANDOM</p>
                    <p className=''>This premium resident house was designed for a big family about 4-6 people. It has own large and spacious terrace of 104.7 sq.m. acts at the same time as a porch.<br/><br/> The presence of the entrance vestibule allows you to use this project of the house in any climatic conditions. The patio between the living room and the master bedroom is also a passive thermal device: it creates a thermal differential between the swimming pool and the patio.<br/><br/> During the planning, it was decided to combine the kitchen dining room - living room, so we got a spacious room where you can implement any interior design.</p>
                </div>
                <div className='flex text-yellow-700 py-6'>
                    <p className='pr-8'><span className='text-5xl pr-2'>340</span>sq.m.</p>
                    <p className='pr-8'><span className='text-5xl pr-2'>6</span>Rooms</p>
                    <p className='pr-8'><span className='text-5xl pr-2'>2</span>Floors</p>
                </div>
                <div className='text-xl font-semibold'>
                    <p className='pb-5'>Timing : 60 days</p>
                    <p className=''>Price: $2 200 000</p>
                </div>
                <div className='flex pt-6'>
                    <button className='bg-yellow-700 py-3 px-14 mt-10 text-white mr-5'>Buy House</button>
                    <button className='py-3 px-6 mt-10 text-yellow-700 border border-yellow-700'>Download Catalog</button>
                </div>
            </div>
            <div className='w-3/5 flex'>
                <div className='w-3/5 pl-8 pt-28'>
                    <img className="w-full h-124 object-center object-cover pb-8" src="https://patch.com/img/cdn/users/3437632/stock/raw/20150755a3d492c67c2.jpg"/>
                    <img className="w-full h-60 object-center object-cover" src="https://img.archiexpo.com/images_ae/projects/images-om/5426-8802224.jpg"/>
                </div>
                <div className='w-2/5 pl-8'>
                    <img className="w-full h-116 object-center object-cover pb-8" src="https://www.magazindomov.ru/wp-content/uploads/2012/09/Shakin-Stevens-House-17.jpg"/>
                    <img className="w-full h-68 object-center object-cover" src="https://cdn.homedsgn.com/wp-content/uploads/2014/09/Vivienda-en-Son-Vida-11-850x952.jpg"/>
                </div>
            </div>
        </div>
        <div className='mt-36 flex px-40 w-full'>
            <div className='w-1/3 pr-8'>
                <img className="w-full h-80 object-center object-cover pb-8" src="https://st.hzcdn.com/simgs/pictures/salones/s-v-house-a-cero-joaquin-torres-y-rafael-llamazares-img~8f21102406e703c1_8-8595-1-2bd790a.jpg"/>
                <img className="w-full h-140 object-center object-cover" src="https://cdn.decoratorist.com/wp-content/uploads/kloof-house-luxury-residence-bedfordview-johannesburg-697161.jpg"/>
            </div>
            <div className='w-2/3'>
                <p className='text-4xl font-medium pb-4'>Half-timbered House TARDEN</p>
                <img className="w-full h-80 object-center object-cover" src="https://image-prod.iol.co.za/resize/1456x145600/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/3829c19f-d224-5614-b6ca-21c13c1b7bdf&operation=CROP&offset=0x0&resize=635x357"/>
                <p>Our strategy was to interfere as little as possible: one enters the house in the upper part close of the plot, through a wall that evokes the region's traditional slate buildings, and descends onto the house's core - a social space split in 2 levels.<br/><br/> From this space, the house's volume breaks and extends along the topography subtle yet effective separation between social and intimate every space sits.<br/><br/> Beyond the romantic notion of a well - grounded house, extensive contact with the ground gives enormous energy benefits.</p>
                <div className='flex text-yellow-700 py-6'>
                    <p className='pr-8'><span className='text-5xl pr-2'>420</span>sq.m.</p>
                    <p className='pr-8'><span className='text-5xl pr-2'>7</span>Rooms</p>
                    <p className='pr-8'><span className='text-5xl pr-2'>3</span>Floors</p>
                </div>
                <div className='text-2xl font-semibold'>
                    <p className='pb-5'>Timing : 70 days</p>
                    <p className=''>Price: $3 100 000</p>
                </div>
                <div className='flex pt-4'>
                    <button className='bg-yellow-700 py-3 px-14 mt-10 text-white mr-5'>Buy House</button>
                    <button className='py-3 px-6 mt-10 text-yellow-700 border border-yellow-700'>Download Catalog</button>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center pt-5 font-medium'>
            <p>See more</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pl-1 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div className='mt-36 px-40 w-full bg-black h-112'>
            <div className='flex justify-between text-white pt-28'>
                <p className='text-4xl ml-36'>Customer Reviews</p>
                <div className='flex mt-8 pb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 border border-yellow-700 text-yellow-700 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-yellow-700 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
            <div className='flex space-x-6 text-black'>
                <div className='bg-amber-500 py-8 px-20'>
                    <div className='flex justify-center pb-2'>
                        <p className='text-lg font-semibold'>Fantastic house</p>
                    </div>
                    <p className='text-sm text-center font-medium pb-6'>I really still can't believe that dreams can come true so quickly! Thanks a lot to the whole Ecolife team for such a great job, I so much love my new home, it is so beautiful thanks to you! You are professionally building a better future for people!</p>
                    <div className='flex justify-center pb-2'>
                        <p className='text-4xl text-white border border-white p-8 rounded-full bg-orange-300'></p>
                    </div>
                    <div className='flex justify-center pb-1'>
                        <p className='text-sm'>Martin Jones</p>
                    </div>
                    <div className='flex justify-center pb-2'>
                        <p className='text-sm'>London, England</p>
                    </div>
                    <div className='flex justify-center text-yellow-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
                <div className='bg-amber-500 py-8 px-20'>
                    <div className='flex justify-center pb-2'>
                        <p className='text-lg font-semibold'>Fantastic house</p>
                    </div>
                    <p className='text-sm text-center font-medium pb-6'>I really still can't believe that dreams can come true so quickly! Thanks a lot to the whole Ecolife team for such a great job, I so much love my new home, it is so beautiful thanks to you! You are professionally building a better future for people!</p>
                    <div className='flex justify-center pb-2'>
                        <p className='text-4xl text-white border border-white p-8 rounded-full bg-orange-300'></p>
                    </div>
                    <div className='flex justify-center pb-1'>
                        <p className='text-sm'>Martin Jones</p>
                    </div>
                    <div className='flex justify-center pb-2'>
                        <p className='text-sm'>London, England</p>
                    </div>
                    <div className='flex justify-center text-yellow-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-36 px-40 w-full bg-orange-200 h-112'>
            <div className='flex justify-center pt-24'>
                <div className='w-3/5'>
                    <p className='text-3xl font-medium pb-4'>Let's start your project!</p>
                    <p className='font-medium text-lg pb-6'>Fill up the Form and our Team<br/> will call you in 1 minute</p>
                    <p className='font-medium text-lg pb-3'>Contact detail</p>
                    <p className='pb-2'>Phone: +1 321 998 14 55</p>
                    <p className='pb-2'>E-mail: ecodream@base.com</p>
                    <p className='pb-3'>Mohrenstrasse 37 <br/>10117 Berlin, Germany</p>
                    <p className='underline font-medium pb-14'>Subscribe to our newsletter</p>
                </div>
                <div className='w-2/5 -mt-12'>
                    <div className='bg-white p-12 text-stone-400'>
                        <p className='border-b border-orange-200 py-4 pl-3'>Name*</p>
                        <p className='border-b border-orange-200 py-4 pl-3'>Last Name</p>
                        <p className='border-b border-orange-200 py-4 pl-3'>Phone*</p>
                        <p className='border-b border-orange-200 py-4 pl-3'>E-mail*</p>
                        <p className='py-4 pl-3'>Your message</p>
                        <div className='flex items-center pt-2 mt-8 border-t border-orange-200'>
                            <input type="checkbox"/>
                            <p><span className='text-black font-medium pl-2'>i agree to the processing of</span> personal data</p>
                        </div>
                        <button className='py-3 w-full mt-10 bg-black text-white'>Send Contacts</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black px-40 w-full pb-20 pt-8'>
            <p className='text-yellow-700 pb-3'>We are in social</p>
            <div className='flex text-yellow-700 pb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            </div>
            <p className='text-sm text-white'>EcoLIFE 2021</p>
        </div>
    </div>
  )
}