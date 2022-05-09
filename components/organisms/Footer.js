import FooterContact from "../molecules/FooterContact";
import FooterFooter from "../molecules/FooterFooter";
import FooterForm from "../molecules/FooterForm";

export default function Footer(props) {
    return (
        <>
            <div className={props.className}>
                    <FooterContact className={props.footerContact.className}/>
                    <FooterForm className={props.footerForm.className}/>
            </div>
            <FooterFooter className={props.footerFooter.className}/>
        </>
    )
}