import { defineStore } from 'pinia'
export const CarouselDataStore = defineStore('carousel' , {
    state: () => ({carousel : [
        {
            id : 0 , 
            image : "https://variety.com/wp-content/uploads/2022/01/BBC-license-fee.jpg?w=1000" , 
            title : "BBC News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 2 , 
            image : "https://image.cnbcfm.com/api/v1/image/106807780-1607434444042-gettyimages-1177856488-AFP_1LO849.jpeg?v=1623270505&w=1920&h=1080" , 
            title : "Facebook News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 4 , 
            image : "https://archello.s3.eu-central-1.amazonaws.com/images/2019/03/12/Mercedes-Benz-utrecht-21.1552399726.9554.jpg" , 
            title : "Benz News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 5 , 
            image : "https://www.globalfleet.com/sites/default/files/field/image/1453888120_bmw_munich.jpg" , 
            title : "Bmw News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 0 , 
            image : "https://s.yimg.com/ny/api/res/1.2/gqd3TT15WFmOTypyCS6mXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/d9fce044789ca5ccd17c841c4ce9a7f1" , 
            title : "Amazon News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 1 , 
            image : "https://media.zenfs.com/en/quartz.com/525ef32d090987f5f91b7012e7ea5553" , 
            title : "Tesla News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
        {
            id : 3 , 
            image : "https://www.equitypandit.com/wp-content/uploads/2022/09/Instagram_ep.jpg" , 
            title : "Instagram News" , 
            text : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        } , 
    ]}) ,  
})