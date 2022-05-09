import BuyHouse from "../molecules/BuyHouse";

export default function House1(props) {
    return (
        <div className={props.className}>
            <div className='w-2/5'>
                {/*ene dr TitleAndSubtext*/}
                <div className=''>
                    <p className='text-3xl font-medium pb-2'>Premium Eco house BRANDOM</p>
                    <p className=''>This premium resident house was designed for a big family about 4-6 people. It has own large and spacious terrace of 104.7 sq.m. acts at the same time as a porch.<br/><br/> The presence of the entrance vestibule allows you to use this project of the house in any climatic conditions. The patio between the living room and the master bedroom is also a passive thermal device: it creates a thermal differential between the swimming pool and the patio.<br/><br/> During the planning, it was decided to combine the kitchen dining room - living room, so we got a spacious room where you can implement any interior design.</p>
                </div>
                <BuyHouse className={props.buyHouse.className}/>
            </div>
            <div className='w-3/5 flex -mt-24'>
                <div className='w-3/5 pl-8 pt-28'>
                    <img className="w-full h-124 object-center object-cover pb-8" src="https://patch.com/img/cdn/users/3437632/stock/raw/20150755a3d492c67c2.jpg"/>
                    <img className="w-full h-60 object-center object-cover" src="https://img.archiexpo.com/images_ae/projects/images-om/5426-8802224.jpg"/>
                </div>
                <div className='w-2/5 pl-8'>
                    <img className="w-full h-116 object-center object-cover pb-8" src="https://www.magazindomov.ru/wp-content/uploads/2012/09/Shakin-Stevens-House-17.jpg"/>
                    <img className="w-full h-68 object-center object-cover" src="https://cdn.homedsgn.com/wp-content/uploads/2014/09/Vivienda-en-Son-Vida-11-850x952.jpg"/>
                </div>
            </div>
        </div>
    )
}   