export default function BuyHouse() {
    return (
        <>
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
        </>
    )
}