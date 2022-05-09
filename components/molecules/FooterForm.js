export default function FooterForm() {
    return (
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
    )
}