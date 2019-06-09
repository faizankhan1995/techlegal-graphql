export class Hearing{

    public id:number;
    public caseId:number;
    public hearingdate:string;
    public proceedings:string;

    constructor(caseId: number, hearingdate: string, proceedings: string) {
        this.id = 0 ;
        this.caseId = caseId;
        this.hearingdate = hearingdate;
        this.proceedings = proceedings;
    }

}