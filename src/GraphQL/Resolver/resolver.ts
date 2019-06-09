import {Hearing} from "../../models/Hearing"
import {Case} from "../../models/Case"
import { SQLiteDbHandler } from "../../DatabaseHandler/SQLiteHandler";

var cases:Case[] = [];
const caseResolvers =
{
    Query:
    {
        case(root: any, { params }: any) {
            return new Case(
                12312,
                "hardcoded title",
                "hardcoded judge",
                "hardcoded type",
                "hardcoded onBehalfOf",
                "hardcoded status",
                "hardcoded description",
                "hardcoded LawyerId",
                new Hearing(12312, "hardcoded hearing date", "hardcoded Proceedings")
            );
        },

        async cases(root: any, { params }: any) {
            var dbHandler = new SQLiteDbHandler();
            var cases = await dbHandler.getCases("");
            console.log("3- This Should apear Last.");
            return cases;

        },
        pendingCases(root: any, { params }: any) {
            return cases;
        },
        decidedCases(root: any, { params }: any) {
            return cases;
        },
        sineDieCases(root: any, { params }: any) {
            return cases;
        },
        previousHearings(root: any, { params }: any) {
            return cases;
        },
    },
    Mutation: {
        //input Type: (caseId:CaseInput) , return Type:String
        insertCase(root: any, params: any) {
            console.log("Input Case Title " + params.case.id);
            var inputCase = new Case(params.case.id, params.case.title,params.case.judge,params.case.type,params.case.onBehalfOf,params.case.status,params.case.description,params.case.lawyerId,params.case.nextHearing);
            cases.push(inputCase);
            return "Case Inserted Successfuly!";
        },
        //input Type: (caseId:string, updated:CaseInput ), return Type:String
        updateCase(root: any, params: any) {

        },
        //input Type: (caseId:string)   return Type:String
        deleteCase(root: any, params: any) {
            
        },
        //input Type: (hearing: HearingInput,caseId:String, officeId:String): return Type:String
        insertHearing(root: any, params: any) {

        },
        //input Type: (hearing: HearingInput,caseId:String, officeId:String): return Type:String
        updateHearing(root: any, params: any) {

        },
        //input Type: (hearingId: String,caseId:String, officeId:String): return Type:String
        deleteHearing(root: any, params: any) {

        }
    }
};
export default caseResolvers;