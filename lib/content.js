import demoNFT1 from "../assets/demoNFT1.jpg"
import NFT1 from "../assets/NFT1.jpg"
import NFT2 from "../assets/NFT2.jpg"
import NFT3 from "../assets/NFT3.jpg"
import NFT4 from "../assets/NFT4.jpg"
import NFT5 from "../assets/NFT5.jpg"
import NFT6 from "../assets/NFT6.jpg"
import NFT7 from "../assets/NFT7.jpg"
import NFT8 from "../assets/NFT8.jpg"
import NFT9 from "../assets/NFT9.jpg"
import NFT10 from "../assets/NFT10.jpg"
import NFT11 from "../assets/NFT11.jpg"
import NFT12 from "../assets/NFT12.jpg"
import NFT13 from "../assets/NFT13.jpg"
import NFT14 from "../assets/NFT14.jpg"

import {  Avatar ,name,username} from 'react-lorem-ipsum';

export const content = {
    page:{
        landingPage:{
            blocks:{
                header:{
                    h1:"Discover, collect and sell extraordinary NFTs",
                    p:"DotNFT is the world's fast hassle free and flexible NFT marketplace",
                    btn_primary:"Explore",
                    btn_secondary:"Sell",
                    card:{
                        img: demoNFT1,
                        avatar:Avatar,
                        name:name("male"),
                        uname:username(),
                    }
                },
                promotion:{
                    text:"Feature Collections",
                    collections:[
                        {
                            img:NFT1,
                            header:"LA LA Landzz",
                            text:"Magical words, creatures, spirits"
                        },
                        {
                            img:NFT2,
                            header:"Screens",
                            text:"Thomas Lin Pedersen x Art Blocks Curated"
                        },
                        {
                            img:NFT3,
                            header:"Master Creatures",
                            text:"A group of 4200 abstract waves"
                        },
                        {
                            img:NFT4,
                            header:"NExt verse",
                            text:"Working Hard to create amaizing world"
                        },
                       
                    ],

                }
            }
        }
    }

}