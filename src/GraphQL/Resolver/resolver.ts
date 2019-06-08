import {Hearing} from "../../models/Hearing"
import {Case} from "../../models/Case"

var cases:Case[] = [];
const caseResolvers =
{
    Query:
    {
        case(root: any, { params }: any) {
            return {
                id: 12312,
                title: "hardcoded test",
                description: "hardcoded test",
                judge : "hardcoded test",
                type : "hardcoded test",
                onBehalfOf : "hardcoded test",
                status : "hardcoded test"
            }
        },

        cases(root: any, { params }: any) {
            console.log("Returning Cases.");
            cases.forEach(element => {
                console.log("Case Id : "+ element.id);
            }); 
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