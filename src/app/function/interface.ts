export interface Products{
   _id:string
   title:string
   imageUrl:string
   price:number
   slug:string
}

export  interface DetailedProduct{
    _id:string
    title:string,
    image:any,
    price:number
    description:string
    category:string
}

export interface ProfilePicture{
    image:any
    userName:string
}