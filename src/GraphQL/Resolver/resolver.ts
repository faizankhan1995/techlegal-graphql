
var cases = [
    {
        id: 123,
        title: "test",
        description: "test",
        judge : "test",
        type : "test",
        onBehalfOf : "test",
        status : "test"
    }]
const caseResolvers =
{
    Query:
    {
        case(root: any, { params }: any) {
            return {
                id: 12312,
                title: "test",
                description: "test",
                judge : "test",
                type : "test",
                onBehalfOf : "test",
                status : "test"
            }
        },
        cases(root: any, { params }: any) {
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
        hearings(root: any, { params }: any) {
            return cases;
        },
    },
    Mutation: {
        //input Type: (caseId:CaseInput) , return Type:String
        insertCase(root: any, params: any) {
            console.log("Input Case Title " + params.case.title);
            var obj = {
                id: 12,
                title: `${params.case.title}`,
                description: `${params.case.description}`,
                judge : `${params.case.judge}`,
                type : `${params.case.type}`,
                onBehalfOf : `${params.case.onBehalfOf}`,
                status : `${params.case.status}`
            };
            cases.push(obj);
            return "Case Inserted";
        },
        //input Type: (caseId:string, updated:CaseInput ), return Type:String
        updateCase(root: any, params: any) {

        },
        //input Type: (caseId:string)   return Type:String
        deleteCase(root: any, params: any) {

        }
    }
};
export default caseResolvers;