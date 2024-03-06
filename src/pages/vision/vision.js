import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Vimeo from "@u-wave/react-vimeo";
import "./vision.css"
import BackgroundIamge1 from './../../assets/img/visionBackground1.jpg'
import BackgroundIamge2 from './../../assets/img/visionBackground2.jpg'
import SubBackgroundIamge from './../../assets/img/subbackground.jpg'
import CarouselImage1 from './../../assets/img/text-image1.jpg'
import CarouselImage2 from './../../assets/img/text-image2.jpg'
import CarouselImage3 from './../../assets/img/text-image3.jpg'
import SliderImage1 from './../../assets/img/slider1.jpg'
import SliderImage2 from './../../assets/img/slider2.jpg'
import SliderImage3 from './../../assets/img/slider3.jpg'


export default function Vision() {

    const data = [
        {id:0, name: 'FIRST FLOOR', backgroundColor: "#2C2A2B", title: 'FIRST FLOOR', image: SliderImage1, text: 'The name “Greenpoint” comes from the verdant and beautiful nature of the area gracefully adjacent to the East River. Once covered with lush forests, meadows, and freshwater creeks, the area evolved together with the development of New York City, in the 18th and 19th centuries.   In the 1830s, Greenpoint transitioned into an innovative manufacturing district, opening a public road and establishing regular ferry service to Manhattan. The streets were named alphabetically and eventually given full names in the 1850s; H Street became Huron Street, probably after the U.S.S. Huron – a locally built steamship.'},
        {id:1, name: 'SECOND FLOOR', backgroundColor: "#2C2A2B", title: 'SECOND FLOOR', image: SliderImage2, text: 'Greenpoint developed into a bustling industry hub for shipbuilding, porcelain, pottery, and glassworks, with rope factories, lumber yards, brass and iron foundries alongside furniture, box, and boiler makers, as well as Eberhard Faber’s pencil factory – once the largest manufacturer of pencils in the United States. Greenpoint was home to the shipbuilding and engineering company Continental Iron Works, which built the USS Monitor – the US Navy’s first iron-hulled warship. The USS Monitor was pivotal during the Civil War, in the Battle of Hampton Roads, the world’s first battle between ironclad warships, which marked a turning point in favor of the Union. Continental Iron Works’ masterpiece influenced American naval strategy for decades.'},
        {id:2, name: 'FLOOR PARK', backgroundColor: "#2C2A2B", title: 'PARK', image: SliderImage3, text: 'As industries expanded, so did housing, turning Greenpoint into a lively, multicultural neighborhood and some of the best condos in New York City. A quintessential New York story. In the 21st century, an eclectic Greenpoint matured into a distinct and desirable enclave, welcoming those who march to the beat of their own drum and desire the best neighborhoods to live in Brooklyn.'}
    ];
    
    return (
        <div>
            <div className="position relative">
                <Vimeo 
                    video="https://player.vimeo.com/video/789651572?background=1&player_id=full_video&loop=1&byline=0&title=0&autoplay=1"
                    autoplay={true}
                    loop
                    controls={false}
                    responsive={true}
                    style={{ width: '100%' }}
                />
            </div>

            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#B68064" }} >
                <div className="md:min-h-[100vh] content-center py-10 md:py-96">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">The Huron: Our Vision for Greenpoint’s Newest Condos</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in the history of an ever-evolving neighborhood, The Huron is a striking tribute to Greenpoint’s heritage, interweaving past and present through stunning design and inspired creativity.</p>
                        </div>                    
                    </div>
                </div>
                <div className="px-4 relative">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">A BRIEF HISTORY</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">A quintessential NYC Story</p>
                    </div>
                </div>
                <div>
                    <Carousel
                        items={data} 
                    />
                </div>
            </div>
            <img src={ BackgroundIamge1}/>
            <div className="px-8 content-center py-10 z-10 relative" style={{ backgroundColor: "#B68064" }} >
                <div className="content-center py-12">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">DESIGN & ARCHITECTURE</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">A Remarkable Tribute</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Guided by a life-long passion and renowned reputation for re-interpreting historic districts through architecture, Morris Adjmi designed The Huron with his signature thoughtful engagement with history, distinct interpretation of industrial forms, and creative expression of materials.</p>
                        </div>               
                    </div>
                </div>
                <div className="content-center">
                    <img className="max-w-[1280px] w-full m-auto " src={ SubBackgroundIamge } />
                    <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex  sm:flex-row-reverse">
                        <div className=" w-full right-0 sm:w-4/5">
                            <img  src={ CarouselImage1 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                </div>
                <div className="content-center py-12 xl:w-[1280px] m-auto">
                    <div className="m-auto mb-10">
                        <p className="text-center font-GTPressura-Light text-5xl text-white">“We create buildings that stand out by fitting in.”</p>
                    </div>
                    <div className="flex items-center mt-10">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">MORRIS ADJMI</p>
                        </div>               
                    </div>
                    
                    <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex">
                        <div className=" w-full right-0 sm:w-3/5">
                            <img  src={ CarouselImage3 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                    <div className="max-w-[1280px] w-full m-auto mt-[90px]  sm:flex  sm:flex-row-reverse">
                        <div className=" w-full sm:w-3/5">
                            <img  src={ CarouselImage2 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ BackgroundIamge2}/>
            
        </div>
    )
}