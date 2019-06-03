export class Hearing{

    public caseId:string;
    public hearingdate:string;
    public proceedings:string;

    constructor(caseId:string,hearingdate:string,proceedings:string)
    {
        this.caseId = caseId;
        this.hearingdate = hearingdate;
        this.proceedings = proceedings;
    }
}