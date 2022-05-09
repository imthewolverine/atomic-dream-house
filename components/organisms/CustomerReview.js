import CustomerReviewNavbar from "../molecules/CustomerReviewNavbar";
import ReviewCard from "../molecules/ReviewCard";

export default function CustomerReview() {
    return (
        <div className='px-40 w-full bg-black h-112'>
            <CustomerReviewNavbar />
            <div className='flex space-x-6 text-black'>
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}