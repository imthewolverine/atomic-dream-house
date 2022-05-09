import FourBenefits from "../molecules/FourBenefits";
import TitleAndSubtext from "../molecules/TitleAndSubtext";

export default function AboutUs() {
    return (
        <div className='mb-36 flex px-40 w-full'>
            <div className='h-160 w-2/5'>
                <img className="w-full h-full object-center object-cover" src="https://www.habbinson.com/wp-content/uploads/2020/12/h8zzPl7mwOEfDPhQGyspAOz2uIHhOZMQcW-pzm2Lc-A-1-2048x1366.jpg"/>
            </div>
            <div className='w-3/5 mt-12'>
                <TitleAndSubtext />
                <FourBenefits />
            </div>
        </div>
    )
}