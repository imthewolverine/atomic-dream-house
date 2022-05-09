export default function CustomerReviewNavbar(props) {
    return (
        <div className={props.className}>
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
    )
}