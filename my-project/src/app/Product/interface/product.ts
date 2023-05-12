import { IGroup } from "./group";

export interface IProduct{
    ProductId: string,
    ProductTitle: string,
    ProductCategory: string,
    ProductGroup: IGroup,
    ProductBrand: string,
    ProductPrice: string,
    ProductImage: string,
    ProductDescription: string
}
export class Product{
    constructor(
        public _id: any=null,
        public title:string="",
        public category:string="",
        public brand:string="",
        public price:string="",
        public image :string="",
        public description :string=""){}
}