import FooterContact from "../molecules/FooterContact";
import FooterFooter from "../molecules/FooterFooter";
import FooterForm from "../molecules/FooterForm";

export default function Footer() {
    return (
        <>
            <div className='flex justify-center pt-24 mt-36 px-40 w-full bg-orange-200 h-112'>
                    <FooterContact />
                    <FooterForm />
            </div>
            <FooterFooter />
        </>
    )
}