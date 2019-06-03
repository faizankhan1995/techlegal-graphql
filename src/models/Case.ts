import {Hearing} from "./Hearing"
export class Case
{
    public title:string;
    public judge:string;
    public type:string;
    public onBehalfOf:string;
    public status:string;
    public description:string;
    public nextHearing:string;

    constructor(title:string, judge:string, type:string,onBehalfOf:string,status:string,description:string,nextHearing:string)
    {

        this.title = title;
        this.judge = judge;
        this.type = type;
        this.onBehalfOf = onBehalfOf;
        this.status = status;
        this.description = description;
        this.nextHearing = nextHearing;
    }
}