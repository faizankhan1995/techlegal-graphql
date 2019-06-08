import {gql} from "apollo-server";

const typeDefs = gql`

  type Office{
    #SQL id of Office
    id:Int!,
    #Name of the Office or Firm
    name:String!,
    #Physical Location of Office
    location:String
  },

  type Lawyer{
    #SQL id of the Lawyer
    id:Int!,
    cnic:String, 
    name:String!,
    email:String,
  },

  type Case {
    #SQL Id of Case
    id: Int!,
    title: String,
    judge: String,    
    type: String,    
    onBehalfOf: String,    
    status: String,    
    description: String,
    #SQL Id of the Lawyer handling this case
    lawyerId:String,    
    nextHearing: Hearing!
  },

  input CaseInput {
    id:Int!,
    title: String!,
    judge: String!,
    type: String,
    onBehalfOf: String,
    status: String,
    description: String,
    lawyerId:String,   
    nextHearing:HearingInput
  },

  type Hearing {
    #SQL id of the hearing
    id: Int,
    #SQL if of the case to which this hearing is associated
    caseId:Int,
    Hearingdate: String!,
    proceedings: String
  },

  input HearingInput {
    caseId:Int!,
    hearingId:String,
    Hearingdate: String,
    proceedings: String
  },

  type Query {

    case(caseId:String, officeId:String): Case
    cases(officeId:String): [Case]
    pendingCases(officeId:String): [Case]
    decidedCases(officeId:String): [Case]
    sineDieCases(officeId:String): [Case]

    previousHearings(caseId: String, officeId:String): [Hearing]  
  }
  type Mutation {

    insertCase(case: CaseInput): String
    updateCase(caseId: String , updated: CaseInput): String
    deleteCase(caseId: String): String
  
    insertHearing(hearing: HearingInput,caseId:String, officeId:String): String
    updateHearing(hearing: HearingInput,caseId:String, officeId:String): String
    deleteHearing(hearingId: String,caseId:String, officeId:String): String
  }
`
export default typeDefs;