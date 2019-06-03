// import {IModelDb,SqliteStatement} from "@bentley/imodeljs-backend";

// const siemensResolvers = {
//     Query: {
//         buildings(root : any, { params } : any, { iModel } : any) {
//             const query = `Select * from bis.Element where ECClassId = 1714`;
//             console.log(query);
//             var results = iModel.executeQuery(query);
            
//             var buildings = [];
//             for(var i =0; i<results.length;i++){
//                 //Building Object
//                 buildings[i]={
//                     identifier: JSON.parse(results[i].jsonProperties).id,
//                 }
//             }
//             return buildings;
//         },
//         storeys(root : any, { params } : any, { iModel } : any) {
//             const query = `Select * from bis.Element where ECClassId = 1717`;
//             console.log(query);
//             var results = iModel.executeQuery(query);
//             var storeys = [];

//             for(var i =0; i<results.length;i++){
//                 var resultjson = JSON.parse(results[i].jsonProperties);
//                 //Story Object
//                 storeys[i]={
//                     identifier: resultjson.id,
//                     building : {
//                         identifier : resultjson.building_id
//                     },
//                     // building_id: resultjson.building_id,
//                     name: resultjson.name,
//                     type: resultjson.type
//                 }
//             }
//             return storeys;
//         },
//         spaces(root : any, { params } : any, { iModel } : any) {
//             const query = `Select * from bis.Element where ECClassId = 1716`;
//             console.log(query);
//             var results = iModel.executeQuery(query);
//             var spaces = [];

//             for(var i =0; i<results.length;i++){
//                 var resultjson = JSON.parse(results[i].jsonProperties);
//                 spaces[i]={
//                     identifier: resultjson.id,
//                     //Create Story Object
//                     storey:{
//                         identifier: resultjson.storey_id
//                     },

//                     name: resultjson.name,
//                     type: resultjson.type
//                 }
//             }
//             return spaces;
//         },
//         devices(root : any, { params } : any, { iModel } : any) {
//             const query = `Select * from bis.Element where ECClassId = 1715`;
//             console.log(query);
//             var results = iModel.executeQuery(query);
//             var devices = [];

//             for(var i =0; i<results.length;i++){
//                 var resultjson = JSON.parse(results[i].jsonProperties);
//                 devices[i]={
//                     identifier: resultjson.id,
//                     //Create Space Object
//                     space:{
//                         identifier: resultjson.space_id
//                     },
//                     asset_id: resultjson.asset_id,
//                     name: resultjson.name,
//                     type: resultjson.type
//                 }
//             }
//             return devices;
//         },
//         timeSeriesData(root : any, { params } : any, { iModel } : any) {
//             const query = `Select * from bis.Element where ECClassId = 1718`;
//             console.log(query);
//             var results = iModel.executeQuery(query);
//             var timeSeriesData = [];

//             for(var i =0; i<results.length;i++){
//                 var resultjson = JSON.parse(results[i].jsonProperties);
//                 timeSeriesData[i]={
//                     timeStamp: resultjson.timestamp,
//                     value: resultjson.value,
//                     sensor_id: resultjson.device_id
//                 }
//             }
//             console.log("returning " + results.length + " items");
//             return timeSeriesData;
//         }
//     },
//     Building : {
//         identifier: (parent:any) => parent.identifier,
//         storeys: (parent:any,args:any,context:any) => {
//             const query = `Select * from bis.Element where ECClassId = 1717`;
//             var allStories = context.iModel.executeQuery(query);
//             var storeys = [];
//             let count =0;
//             for(var i =0; i<allStories.length;i++){
//                 var resultjson = JSON.parse(allStories[i].jsonProperties);
//                 if(resultjson.building_id === parent.identifier)
//                 {
//                     //Story Object
//                     storeys[count++]={
//                         identifier: resultjson.id,
//                         building : {
//                             identifier : resultjson.building_id
//                         },
//                         // building_id: resultjson.building_id,
//                         name: resultjson.name,
//                         type: resultjson.type
//                     }
//                 }
//             }
//             return storeys;
//         }
//     },
//     Storey: {
//         identifier: (parent: any) => parent.identifier,
//         name: (parent: any) => parent.name,
//         type: (parent: any) => parent.type,
//         building: (parent: any) => parent.building,
//         spaces: (parent: any, args: any, context: any) => {
//             const query = `Select * from bis.Element where ECClassId = 1716`;
//             //console.log("Fetching All Spaces for Story");
//             var allSpaces = context.iModel.executeQuery(query);
//             var spaces = [];
//             let count = 0;
//             for (var i = 0; i < allSpaces.length; i++) {
//                 var resultjson = JSON.parse(allSpaces[i].jsonProperties);
//                 if (resultjson.storey_id == parent.identifier ) {
//                     //Space Object
//                     spaces[count++] = {
//                         identifier: resultjson.id,
//                         storey:{ 
//                             identifier: resultjson.storey_id,
//                             name: parent.name,
//                             type:parent.type,
//                             building:parent.building
//                         },
//                         name: resultjson.name,
//                         type: resultjson.type
//                     }
//                 }
//             }
//             return spaces;
//         }
//     },
//     Space:
//     {
//         identifier:(parent:any)=>parent.identifier,
//         name :(parent:any ) => parent.name,
//         type:(parent:any) => parent.type,
//         // storey:(parent:any) => parent.storey,
//         storey:(parent:any,args:any,context:any) => {
//             //This will return Object of Type Storey

//             const query = `Select * from bis.Element where ECClassId = 1717`;
//             //console.log("Fetching Story for Space");
//             var allStories = context.iModel.executeQuery(query);
//             for (var i = 0; i < allStories.length; i++) {
//                 var resultjson = JSON.parse(allStories[i].jsonProperties);
//                 if (resultjson.id == parent.storey.identifier ) 
//                 {
//                     //console.log("Found Story for Space");
//                     //Storey Object
//                     return {
//                             identifier: resultjson.id,
//                             building : {
//                                 identifier : resultjson.building_id
//                             },
//                             name: resultjson.name,
//                             type: resultjson.type
//                         }
//                 }
//             }
//             console.log("No Story Found for Space");
//             return parent.storey;
//         },
//         devices:(parent:any,args:any,context:any) => {
//             const query = `Select * from bis.Element where ECClassId = 1715`;
//             //console.log("Fetching All Devices for Space");
//             var allDevices = context.iModel.executeQuery(query);
//             var devices = [];
//             let count = 0;
//             for (var i = 0; i < allDevices.length; i++) {
//                 var resultjson = JSON.parse(allDevices[i].jsonProperties);
//                 if (resultjson.space_id == parent.identifier ) {
//                     //Device Object
//                     devices[count++] = {
//                         identifier: resultjson.id,
//                         space:{ 
//                             identifier: resultjson.space_id,
//                             name: parent.name,
//                             type:parent.type,
//                             storey:parent.storey
//                         },
//                         asset_id:resultjson.asset_id,
//                         name: resultjson.name,
//                         type: resultjson.type
//                     }
//                 }
//             }
//             return devices;
//         }
//     },
//     Device:
//     {
//         identifier:(parent:any)=>parent.identifier,
//         name :(parent:any ) => parent.name,
//         type:(parent:any) => parent.type,
//         asset_id:(parent:any) => parent.asset_id,
//         space:(parent:any,args:any,context:any) => {
//             // create and return Object based on parent.spaceid
//             const query = `Select * from bis.Element where ECClassId = 1716`;
//             //console.log("Fetching Space for Device");
//             var allSpaces = context.iModel.executeQuery(query);   
//             for (var i = 0; i < allSpaces.length; i++) {
//                 var resultjson = JSON.parse(allSpaces[i].jsonProperties);
//                 if (resultjson.id == parent.space.identifier ) 
//                 {
//                     //console.log("Found Space for Device");
//                     //Space Object
//                     return {
//                         identifier: resultjson.id,
//                         storey:{ 
//                             identifier: resultjson.storey_id,
//                         },
//                         name: resultjson.name,
//                         type: resultjson.type
//                     }
//                 }
//             }
//             console.log("No Space Found for Device"); 
//         },
//     },
//     Mutation:{ 
//         createBuilding(root:any,{inputBuilding}:any,{iModel}:any)
//         {
//             var jsonSpaceProps = `{"id":"${inputBuilding.identifier}"}`
//             jsonSpaceProps = jsonSpaceProps.replace(new RegExp('"', 'g'),"\"\"");
//             var query = "insert into bis_Element (ECClassId,ModelId,CodeSpecId,CodeScopeId,UserLabel,JsonProperties) values (1714,1,19,1,\"Siemens Building\",\""+jsonSpaceProps +"\");";

//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.step();                
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Building Added";
//         },
//         createStory(root:any,{inputStory}:any,{iModel}:any)
//         {
//             var jsonSpaceProps = `{"id":"${inputStory.identifier}","name":"${inputStory.name}","type":"${inputStory.type}", "building_id":"${inputStory.buildingId}"}`
//             jsonSpaceProps = jsonSpaceProps.replace(new RegExp('"', 'g'),"\"\"");
//             var query = "insert into bis_Element (ECClassId,ModelId,CodeSpecId,CodeScopeId,UserLabel,JsonProperties) values (1717,1,19,1,\"Siemens Storey\",\""+jsonSpaceProps +"\");";

//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.step();
                
//                 // iModel.withPreparedSqliteStatement(query,(result:any)=> {console.log(result)})
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Story Added";
//         },
//         createSpace(root:any,{inputSpace}:any,{iModel}:any)
//         {
//             var jsonSpaceProps = `{"id":"${inputSpace.identifier}","name":"${inputSpace.name}","type":"${inputSpace.type}", "storey_id":"${inputSpace.storeyId}"}`
//             jsonSpaceProps = jsonSpaceProps.replace(new RegExp('"', 'g'),"\"\"");
//             var query = "insert into bis_Element (ECClassId,ModelId,CodeSpecId,CodeScopeId,UserLabel,JsonProperties) values (1716,1,19,1,\"Siemens Space\",\""+jsonSpaceProps +"\");";
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.step();
                
//                 // iModel.withPreparedSqliteStatement(query,(result:any)=> {console.log(result)})
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Space Added";
//         },
//         createDevice(root:any,{inputDevice}:any,{iModel}:any)
//         {
//             var jsonSpaceProps = `{"id":"${inputDevice.identifier}","name":"${inputDevice.name}","type":"${inputDevice.type}", "space_id":"${inputDevice.spaceId}", "asset_id":"${inputDevice.assetId}"}`
//             jsonSpaceProps = jsonSpaceProps.replace(new RegExp('"', 'g'),"\"\"");
//             var query = "insert into bis_Element (ECClassId,ModelId,CodeSpecId,CodeScopeId,UserLabel,JsonProperties) values (1715,1,19,1,\"Siemens Device\",\""+jsonSpaceProps +"\");";

//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.step();
                
//                 // iModel.withPreparedSqliteStatement(query,(result:any)=> {console.log(result)})
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Device Added";
//         },

//         //Update Mutations to Update Data in iModel
        
//         replaceStory(root:any,{inputStory}:any,{iModel}:any)
//         {
//             var jsonStoryProps = `{"id":"${inputStory.identifier}","name":"${inputStory.name}","type":"${inputStory.type}", "building_id":"${inputStory.buildingId}"}`
//             var query = "update bis_Element SET JsonProperties = ? where ECClassId=1717 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+inputStory.identifier+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,jsonStoryProps);
//                 sql.bindValue(2,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Story Updated";
//         },
//         replaceSpace(root:any,{inputSpace}:any,{iModel}:any)
//         {
//             var jsonSpaceProps = `{"id":"${inputSpace.identifier}","name":"${inputSpace.name}","type":"${inputSpace.type}", "storey_id":"${inputSpace.storeyId}"}`
//             var query = "update bis_Element SET JsonProperties = ? where ECClassId=1716 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+inputSpace.identifier+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,jsonSpaceProps);
//                 sql.bindValue(2,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Space Updated";
//         },
//         replaceDevice(root:any,{inputDevice}:any,{iModel}:any)
//         {
//             var jsonDeviceProps = `{"id":"${inputDevice.identifier}","name":"${inputDevice.name}","type":"${inputDevice.type}", "space_id":"${inputDevice.spaceId}", "asset_id":"${inputDevice.assetId}"}`
//             var query = "update bis_Element SET JsonProperties = ? where ECClassId=1715 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+inputDevice.identifier+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,jsonDeviceProps);
//                 sql.bindValue(2,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Device Updated";
//         },
//         //Mutations to Delete Data in an iModel
//         deleteBuilding(root:any,input:any,{iModel}:any)
//         {
//             var query = "Delete from bis_Element where ECClassId=1714 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+input.buildingId+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Building Deleted!";
//         },
//         deleteStory(root:any,input:any,{iModel}:any)
//         {
//             var query = "Delete from bis_Element where ECClassId=1717 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+input.storyId+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Story Deleted!";
//         },
//         deleteSpace(root:any,input:any,{iModel}:any)
//         {
//             var query = "Delete from bis_Element where ECClassId=1716 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+input.spaceId+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Space Deleted!";
//         },
//         deleteDevice(root:any,input:any,{iModel}:any)
//         {
//             var query = "Delete from bis_Element where ECClassId=1715 AND JsonProperties like ?";
//             var pattern = "%\"id\":\""+input.deviceId+"\"%"; 
//             try {
//                 var sql:SqliteStatement = iModel.prepareSqliteStatement(query)
//                 sql.bindValue(1,pattern);
//                 sql.step();
//                 iModel.saveChanges();    
//             } catch (error) {
//                 console.log(error);
//                 return error;
//             }
//             return "Device Deleted!";
//         }
        
//     }

// };

// export default siemensResolvers;