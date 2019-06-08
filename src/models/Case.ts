import {Hearing} from "./Hearing"

export class Case
{
    public id:number;
    public title:string;
    public judge:string;
    public type:string;
    public onBehalfOf:string;
    public status:string;
    public description:string;
    public lawyerId:string; 
    public nextHearing:Hearing;

    constructor(caseId:number,title:string, judge:string, type:string,onBehalfOf:string,status:string,description:string,lawyerId:string,nextHearing:Hearing)
    {
        this.id = caseId;
        console.log("Case id Found : "+caseId);
        this.title = title;
        this.judge = judge;
        this.type = type;
        this.onBehalfOf = onBehalfOf;
        this.status = status;
        this.description = description;
        this.lawyerId = lawyerId;
        this.nextHearing = nextHearing;
    }
}