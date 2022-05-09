import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/organisms/AboutUs'
import CustomerReview from '../components/organisms/CustomerReview'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import House1 from '../components/organisms/House1'
import House2 from '../components/organisms/House2'

export default function Home() {
  return (
    <div className=''>
        <Header />
        <AboutUs />
        <div className='flex px-40 w-full'>
            <div className='pb-6'>
                <p className='text-5xl pb-3'>Our Projects</p>
                <p className='text-yellow-700'>Choose your future house</p>
            </div>
        </div>
        <House1 />
        <House2 />
        <div className='mb-36 flex justify-center items-center pt-5 font-medium'>
            <p>See more</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pl-1 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <CustomerReview />
        <Footer />
    </div>
  )
}