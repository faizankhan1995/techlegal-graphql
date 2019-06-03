import {gql} from "apollo-server";


const typeDefs = gql`

  type Office{
    id:ID!,
    name:String!,
    location:String
  }

  type Lawyer{
    id:ID!,
    name:String!,
    email:String,
    cases:[Case],
  },
  type Case {
    id: Int,
    title: String,
    judge: String,
    type: String,
    onBehalfOf: String,
    status: String,
    description: String,
    nextHearing: Hearing!
  }
  type Hearing {
    id: String,
    caseId:String
    Hearingdate: String!,
    proceedings: String
  }

  input CaseInput {
    title: String!,
    judge: String!,
    type: String,
    onBehalfOf: String,
    status: String,
    description: String,
    nextHearing:HearingInput
  }
  input HearingInput {
    caseId:String!
    Hearingdate: String,
    proceedings: String
  }

  type Query {
  
    case(caseId:String, officeId:String): Case
    cases(officeId:String): [Case]
    pendingCases(officeId:String): [Case]
    decidedCases(officeId:String): [Case]
    sineDieCases(officeId:String): [Case]

    hearings(caseId: String, officeId:String): [Hearing]  
  }
  type Mutation {

    insertCase(case: CaseInput): String
    updateCase(caseId: String , updated: CaseInput): String
    deleteCase(caseId: String): String
  
    insertHearing(hearing: HearingInput,caseId:String, officeId:String): String
    updateHearing(hearing: HearingInput,caseId:String, officeId:String): String
    deleteHearing(hearing: HearingInput,caseId:String, officeId:String): String

  }
`
export default typeDefs;