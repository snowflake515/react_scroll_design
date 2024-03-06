import React from "react";
import BackgroundIamge1 from './../../assets/img/neighbood1.jpg'
import BackgroundIamge2 from './../../assets/img/neighbood2.jpg'
import BackgroundIamge3 from './../../assets/img/neighbood3.jpg'
import TextImage1 from './../../assets/img/nei_t1.jpg'
import TextImage2 from './../../assets/img/nei_t2.jpg'
import TextImage3 from './../../assets/img/nei_t3.jpg'
import TextImage4 from './../../assets/img/nei_t4.jpg'
import Carousel from "../../components/Carousel/Carousel1";
import Carousel2 from "../../components/Carousel/Carousel2";
import SliderImage1 from './../../assets/img/slider1.jpg'
import SliderImage2 from './../../assets/img/slider2.jpg'
import SliderImage3 from './../../assets/img/slider3.jpg'

export default function Neighborhood() {
    const data = [
        {id:0, name: 'FIRST FLOOR', backgroundColor: "#2C2A2B", title: 'PARKS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A1992.jpg.webp", text: 'The Huron has unparalleled access to Brooklyn’s expanded and connected waterfront promenade than other Greenpoint condos, as well as several local favorites for sports and picnics, such as McCarren Park to the south. A gem for dog-lovers is McGolrick Park, while Transmitter Park is ideal for relaxing to gorgeous river views.'},
        {id:1, name: 'SECOND FLOOR', backgroundColor: "#2C2A2B", title: 'PARKS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A1960.jpg.webp", text: 'The Huron has unparalleled access to Brooklyn’s expanded and connected waterfront promenade than other Greenpoint condos, as well as several local favorites for sports and picnics, such as McCarren Park to the south. A gem for dog-lovers is McGolrick Park, while Transmitter Park is ideal for relaxing to gorgeous river views.'},
        {id:2, name: 'FLOOR PARK', backgroundColor: "#2C2A2B", title: 'PARKS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2540.jpg.webp", text: 'The Huron has unparalleled access to Brooklyn’s expanded and connected waterfront promenade than other Greenpoint condos, as well as several local favorites for sports and picnics, such as McCarren Park to the south. A gem for dog-lovers is McGolrick Park, while Transmitter Park is ideal for relaxing to gorgeous river views.'}
    ];

    const data1 = [
        {id:0, name: 'FIRST FLOOR', backgroundColor: "#2C2A2B", title: 'DINING', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2126.jpg.webp", text: 'Greenpoint’s food scene is legendary – from the best brick-oven fired pizza in NYC to generational Polish classics and iconic donuts. Charming neighborhood haunts blend with hidden spots and uber-modern glamorous venues, offering a wealth of taste, style, and dining options that make Brooklyn condos living unmatched. '},
        {id:1, name: 'SECOND FLOOR', backgroundColor: "#2C2A2B", title: 'DINING', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2599.jpg.webp", text: 'Greenpoint’s food scene is legendary – from the best brick-oven fired pizza in NYC to generational Polish classics and iconic donuts. Charming neighborhood haunts blend with hidden spots and uber-modern glamorous venues, offering a wealth of taste, style, and dining options that make Brooklyn condos living unmatched. '},
        {id:2, name: 'FLOOR PARK', backgroundColor: "#2C2A2B", title: 'DINING', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2602.jpg.webp", text: 'Greenpoint’s food scene is legendary – from the best brick-oven fired pizza in NYC to generational Polish classics and iconic donuts. Charming neighborhood haunts blend with hidden spots and uber-modern glamorous venues, offering a wealth of taste, style, and dining options that make Brooklyn condos living unmatched. '}
    ];

    const data2 = [
        {id:0, name: 'FIRST FLOOR', backgroundColor: "#2C2A2B", title: 'SHOPS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2354-Edit-2.jpg.webp", text: 'A colorful and eclectic mix of curated boutiques, vintage shops, and handcrafted local brands dot the streets of Greenpoint, providing not just unusual and unique products, but most importantly a warm, friendly atmosphere and personal touch you won’t get elsewhere. '},
        {id:1, name: 'SECOND FLOOR', backgroundColor: "#2C2A2B", title: 'SHOPS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2346.jpg.webp", text: 'A colorful and eclectic mix of curated boutiques, vintage shops, and handcrafted local brands dot the streets of Greenpoint, providing not just unusual and unique products, but most importantly a warm, friendly atmosphere and personal touch you won’t get elsewhere. '},
        {id:2, name: 'FLOOR PARK', backgroundColor: "#2C2A2B", title: 'SHOPS', image: "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2624.jpg.webp", text: 'A colorful and eclectic mix of curated boutiques, vintage shops, and handcrafted local brands dot the streets of Greenpoint, providing not just unusual and unique products, but most importantly a warm, friendly atmosphere and personal touch you won’t get elsewhere. '}
    ];

    return (
        <div>
            <img src={ BackgroundIamge1} className="inset-0 bg-black opacity-100"/>
            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center py-20">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-black pb-5">GREENPOINT</p>
                    </div>
                    <div className="xl:w-[600px] m-auto mb-4">
                        <p className="text-center font-GTPressura-Light text-5xl text-black px-4">TAn Authenically 
                        Brooklyn Condo</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-2xl text-black px-4">An ever-evolving, vibrant enclave, Greenpoint’s authenticity is emphatically Brooklyn. Both gritty and refined, Greenpoint is home to artists, restaurants, shops, and culture that keep New York exciting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center xl:w-[1280px] m-auto">
                    
                    <div className="max-w-[1280px] w-full m-auto sm:flex justify-center">
                        <div className="right-0 mr-3">
                            <img className="h-[599px] w-[536px]" src={ TextImage1 }/>
                        </div>
                        <div className="right-0 ml-3">
                            <img className="h-[599px] w-[536px]" src={ TextImage2 }/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center xl:w-[1100px] m-auto ">
                    <div className="max-w-[1280px] w-full m-auto mt-[10px]">
                        <div className="xl:w-[600px] m-auto mb-4 mt-20">
                            <p className="text-center font-GTPressura-Light text-5xl text-black px-4">AN EASY CHARM</p>
                        </div>
                        <div className="flex items-center mb-20">
                            <div className="w-auto mx-auto xl:w-2/3">
                                <p className="text-base font-GTPressura-Light text-center text-2xl text-black px-4">From lush nature to bountiful farmland, from bustling industrial and manufacturing district to one of the most desirable residential areas, a hub for tech companies and film production studios, the setting for many TV series, Greenpoint has incorporated and honored its diverse history, nourishing an eclectic, multicultural community soul. As dazzling new developments fuse gracefully with remnants of an honored past, every street, every corner speaks the language of memory. There is a distinctly intimate, easy-going, small-town vibe.</p>
                            </div>
                        </div>
                        <div className=" w-full right-0 sm:w-auto sm:mb-20">
                            <img  src={ TextImage3 }/>
                        </div>
                    </div>
                </div>
            </div>

            <img src={ BackgroundIamge2}/>
            
            <div style={{ backgroundColor: "#F1ECE2" }} >
                <Carousel2
                    items={data} 
                />
            </div>

            <div style={{ backgroundColor: "#F1ECE2" }} >
                <Carousel
                    items={data1} 
                />
            </div>

            <div style={{ backgroundColor: "#F1ECE2" }} >
                <Carousel2
                    items={data2} 
                />
            </div>
            
            <img src={ BackgroundIamge3}/>

        </div>
        
    )
}