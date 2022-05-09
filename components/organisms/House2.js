export default function House2(props) {
    return (
        <div className={props.className}>
            <div className='w-1/3 pr-8'>
                <img className="w-full h-80 object-center object-cover pb-8" src="https://st.hzcdn.com/simgs/pictures/salones/s-v-house-a-cero-joaquin-torres-y-rafael-llamazares-img~8f21102406e703c1_8-8595-1-2bd790a.jpg"/>
                <img className="w-full h-140 object-center object-cover" src="https://cdn.decoratorist.com/wp-content/uploads/kloof-house-luxury-residence-bedfordview-johannesburg-697161.jpg"/>
            </div>
            <div className='w-2/3'>
                <p className='text-4xl font-medium pb-4'>Half-timbered House TARDEN</p>
                <img className="w-full h-80 object-center object-cover" src="https://image-prod.iol.co.za/resize/1456x145600/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/3829c19f-d224-5614-b6ca-21c13c1b7bdf&operation=CROP&offset=0x0&resize=635x357"/>
                <p>Our strategy was to interfere as little as possible: one enters the house in the upper part close of the plot, through a wall that evokes the region's traditional slate buildings, and descends onto the house's core - a social space split in 2 levels.<br/><br/> From this space, the house's volume breaks and extends along the topography subtle yet effective separation between social and intimate every space sits.<br/><br/> Beyond the romantic notion of a well - grounded house, extensive contact with the ground gives enormous energy benefits.</p>
                {/*BuyHouse*/}
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
    )
}