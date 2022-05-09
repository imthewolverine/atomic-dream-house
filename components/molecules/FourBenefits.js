export default function FourBenefits(props) {
    return (
        <div className={props.className}>
            <div className='flex items-center pb-6'><p className='text-5xl text-yellow-700 pr-3'>750</p><p>Successful projects</p></div>
            <div className='flex items-center pb-6'><p className='text-5xl text-yellow-700 pr-3'>18</p><p>Years of experience</p></div>
            <div className='flex items-center'><p className='text-5xl text-yellow-700 pr-3'>120</p><p>Cities are built up</p></div>
            <div className='flex items-center'><p className='text-5xl text-yellow-700 pr-3'>15</p><p>Best european architects</p></div>
        </div>
    )
}