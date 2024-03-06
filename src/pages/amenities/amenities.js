import React from "react";
import BackgroundIamge1 from './../../assets/img/amenitiesBackground1.jpg'
import BackgroundIamge2 from './../../assets/img/residenccesBackground2.jpg'
import ResponsiveTab from "../../components/ResponsiveTab/ResponsiveTab";
import TabImage1 from "./../../assets/img/amenities-tab-1.jpg";
import TabImage2 from "./../../assets/img/amenities-tab-2.jpg";
import TabImage3 from "./../../assets/img/amenities-tab-3.jpg";
import TabImage4 from "./../../assets/img/amenities-tab-4.jpg";

export default function Amenities() {

    const data = [
        {id:0, name: 'FIRST FLOOR', backgroundColor: "#2C2A2B", title: 'FIRST FLOOR', image: TabImage1, text: 'Get charged with spaces that are intuitive and elevated, inspired by purpose.'},
        {id:1, name: 'SECOND FLOOR', backgroundColor: "#2C2A2B", title: 'SECOND FLOOR', image: TabImage2, text: 'Vibrant spaces for kids and teens, dedicated to playing and growing together.'},
        {id:2, name: 'LOOP PARK', backgroundColor: "#2C2A2B", title: 'PARK', image: TabImage3, text: 'An imaginative 8,000+ sq ft outdoor park and playground centered around a fun treehouse.'},
        {id:3, name: 'ROOF UP', backgroundColor: "#2C2A2B", title: 'AT THE TOP', image: TabImage4, text: 'Entertain, socialize, and relax to the backdrop of awe-inspiring views over three of the city’s boroughs and the iconic Manhattan skyline.'},
    ];


    return (
        <div>
            <img src={ BackgroundIamge1} className="inset-0"/>
            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
                <div className="content-center py-10">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">AMENITIES</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">Perfect Balance</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">The Huron amenities offering is exceptional. With its carefully curated 30,000 square feet, designed as a serene sanctuary and a thriving resident community, it flows like the river to the unique pace of life.</p>
                        </div>
                    </div>
                </div>
                <div className="content-center py-16 pb-20">
                    <ResponsiveTab 
                        data={data}
                    />
                </div>
            </div>
            
            <img src={ BackgroundIamge2}/>
            
        </div>
    )
}