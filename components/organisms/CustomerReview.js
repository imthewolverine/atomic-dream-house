import CustomerReviewNavbar from "../molecules/CustomerReviewNavbar";
import ReviewCard from "../molecules/ReviewCard";

export default function CustomerReview(props) {
    return (
        <div className={props.props.className}>
            <CustomerReviewNavbar className={props.props.customerReviewNavbar.className} />
            <div className='flex space-x-6 text-black'>
                {props.props.reviewCard.map((card) => {
                    return(
                    <ReviewCard className={card.className}/>
                    )
                }
                )}
            </div>
        </div>
    )
}