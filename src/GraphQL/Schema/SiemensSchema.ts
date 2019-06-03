// import siemensResolvers from "./SiemensResolvers";
// import {makeExecutableSchema} from "graphql-tools";
// import {gql} from "apollo-server";

// const typeDefs = gql`
//     type Point2d {
//         x : Float
//         y : Float
//     }
//     type Point3d {
//         x : Float
//         y : Float
//         z : Float
//     }
//     # building data from siemens
//     type Building {
//        # siemens builing identifier
//         identifier: String
//         #Stories that exist in building
//         storeys :[Storey]
//     }
//     # storey data from siemens
//     type Storey {
//         # builing where storey is located
//         building: Building
//         # siemens storey identifier
//         identifier: String
//         # siemens storey name
//         name: String
//         # siemens storey type
//         type: String
//         #spaces that exist in Storey
//         spaces:[Space]
//     }
//     # space data from siemens
//     type Space {
//         # storey where space is located
//         storey: Storey
//         # siemens space identifier
//         identifier: String
//         # siemens space name
//         name: String
//         # siemens space type
//         type: String
//         #Devices that are inside a Space
//         devices:[Device]
//     }
//     # device data from siemens
//     type Device {
//         # space where device is located
//         space: Space
//         # siemens device identifier
//         identifier: String
//         # siemens device name
//         name: String
//         # siemens device type
//         type: String
//         # siemens device asset_id
//         asset_id: String
//     }
//     # TimeSeries Data from siemens
//     type TimeSeriesData {
//         # time of reading
//         timeStamp: String
//         # reading value
//         value: String
//         # device/sensor where the reading came from
//         sensor_id: String
//     }

//     type Query
//     {
//         buildings : [Building]
//         storeys : [Storey]
//         spaces : [Space]
//         devices : [Device]
//         timeSeriesData : [TimeSeriesData]
//     }

//     type Mutation
//     {
//         createBuilding(inputBuilding:inputBuilding):String
//         createStory(inputStory:inputStory):String
//         createSpace(inputSpace:inputSpace):String 
//         createDevice(inputDevice:inputDevice):String

//         replaceStory(inputStory:inputStory):String
//         replaceSpace(inputSpace:inputSpace):String 
//         replaceDevice(inputDevice:inputDevice):String

//         deleteBuilding(buildingId:String):String
//         deleteStory(storyId:String):String
//         deleteSpace(spaceId:String):String 
//         deleteDevice(deviceId:String):String
//     }

//     # Building data from siemens
//     input inputBuilding {
//         # siemens Building identifier
//         identifier: String!
//     }

//     # Story data from siemens
//     input inputStory {
//         # siemens Story identifier
//         identifier: String!
//         # Building where Story is located
//         buildingId: String!
//         # siemens Story name
//         name: String!
//         # siemens Story type
//         type: String!
//     }
    
//     # space data from siemens
//     input inputSpace {
//         # siemens space identifier
//         identifier: String!
//         # storey where space is located
//         storeyId: String!
//         # siemens space name
//         name: String!
//         # siemens space type
//         type: String!
//     }

//     # Device data from siemens
//     input inputDevice {
//         # siemens Device identifier
//         identifier: String!
//         # space where Device is located
//         spaceId: String!
//         # siemens Device name
//         name: String!
//         # siemens Device type
//         type: String!
//         # siemens Device assetId
//         assetId: String!
//     }
// `;