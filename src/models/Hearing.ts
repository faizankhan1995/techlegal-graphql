export class Hearing{

    public caseId:number;
    public hearingdate:string;
    public proceedings:string;

    constructor(caseId:number,hearingdate:string,proceedings:string)
    {
        this.caseId = caseId;
        this.hearingdate = hearingdate;
        this.proceedings = proceedings;
    }
}