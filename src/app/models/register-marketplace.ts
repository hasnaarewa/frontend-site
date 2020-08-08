
export interface IRegisterMarketplace{
    step :number;
    percent:number;
    data:marketPlaceData;
}

interface marketPlaceData{
    type:string;
    address1:string;
    logo:any;
    address2:string;
    name:string;
    color1:string;
    color2:string;
    email:string;
    password:string;
}