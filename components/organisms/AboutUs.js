import FourBenefits from "../molecules/FourBenefits";
import TitleAndSubtext from "../molecules/TitleAndSubtext";

export default function AboutUs(props) {
    return (
        <div className={props.props.className}>
            <div className='h-160 w-2/5'>
                <img className="w-full h-full object-center object-cover" src="https://www.habbinson.com/wp-content/uploads/2020/12/h8zzPl7mwOEfDPhQGyspAOz2uIHhOZMQcW-pzm2Lc-A-1-2048x1366.jpg"/>
            </div>
            <div className='w-3/5 mt-12'>
                <TitleAndSubtext className={props.props.titleAndSubtext.className}/>
                <FourBenefits className={props.props.fourBenefits.className}/>
            </div>
        </div>
    )
}