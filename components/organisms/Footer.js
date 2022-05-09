import FooterContact from "../molecules/FooterContact";
import FooterFooter from "../molecules/FooterFooter";
import FooterForm from "../molecules/FooterForm";

export default function Footer(props) {
    return (
        <>
            <div className={props.props.className}>
                    <FooterContact className={props.props.footerContact.className}/>
                    <FooterForm className={props.props.footerForm.className}/>
            </div>
            <FooterFooter className={props.props.footerFooter.className}/>
        </>
    )
}