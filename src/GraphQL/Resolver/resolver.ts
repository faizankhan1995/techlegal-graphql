
var cases = [
    {
        id: 123,
        title: "test",
        description: "test"
    },
    {
        id: 456,
        title: "test2",
        description: "test2"
    }]
const caseResolvers =
{
    Query:
    {
        case(root: any, { params }: any) {
            return {
                id: 12312,
                title: "test",
                description: "test"
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
            console.log("Input Case Title " + params);
            console.log("Input Case Title " + params.case.title);
            var obj = { id: 12, title: `${params.case.title}`, description: `${params.case.description}` };
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