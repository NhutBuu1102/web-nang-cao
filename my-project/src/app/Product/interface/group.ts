export interface IGroup {
    new: string;
    hot: string;
}

export class Group{
    constructor(
        public product_new:string="",
        public product_hot:string=""){}
}