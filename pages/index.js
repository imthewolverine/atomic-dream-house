import AboutUs from '../components/organisms/AboutUs'
import CustomerReview from '../components/organisms/CustomerReview'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import House1 from '../components/organisms/House1'
import House2 from '../components/organisms/House2'

export default function Home() {
    var homePagedata = [
        {
            header: {
                className: "mb-36 relative text-white",
                navbar: {
                    className: "absolute px-40 inset-x-0 top-0 flex justify-between items-center border-b border-stone-400"
                } 
            },
            aboutUs: {
                className: "mb-36 flex px-40 w-full",
                titleAndSubtext: {
                    className: "bg-gray-100 py-14 pl-8 pr-12"
                },
                fourBenefits: {
                    className: "grid grid-cols-2 pl-8 pr-12 py-10"
                }
            },
            house1: {
                className: "mb-36 flex px-40 w-full",
                buyHouse: {
                    className: ""
                }
            },
            house2: {
                className: "flex px-40 w-full"
            },
            customerReview: {
                className: "px-40 w-full bg-black h-112",
                customerReviewNavbar: {
                    className: "flex justify-between text-white pt-28"
                },
                reviewCard: [
                    {
                        className: "bg-amber-500 py-8 px-20"
                    },
                    {
                        className: "bg-amber-500 py-8 px-20"
                    },
                ]
            },
            footer: {
                className: "flex justify-center pt-24 mt-36 px-40 w-full bg-orange-200 h-112",
                footerContact: {
                    className: "w-3/5"
                },
                footerForm: {
                    className: "w-2/5 -mt-12"
                },
                footerFooter: {
                    className: "bg-black px-40 w-full pb-20 pt-8"
                }
            }
        }
    ]
    return (
        <div className=''>
            <Header props={homePagedata[0].header}/>
            <AboutUs props={homePagedata[0].aboutUs}/>
            <div className='flex px-40 w-full'>
                <div className='pb-6'>
                    <p className='text-5xl pb-3'>Our Projects</p>
                    <p className='text-yellow-700'>Choose your future house</p>
                </div>
            </div>
            <House1 props={homePagedata[0].house1}/>
            <House2 props={homePagedata[0].house2}/>
            <div className='mb-36 flex justify-center items-center pt-5 font-medium'>
                <p>See more</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pl-1 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <CustomerReview props={homePagedata[0].customerReview}/>
            <Footer props={homePagedata[0].footer}/>
        </div>
  )
}