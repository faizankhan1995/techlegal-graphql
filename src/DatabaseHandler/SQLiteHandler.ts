import { Case } from "../models/Case";
import { Hearing } from "../models/Hearing";
import { Database } from "sqlite3";
import { resolve } from "path";
import { rejects } from "assert";

var sqlite3 = require('sqlite3');

// function ExecuteQuery()
// {
//     db.all("SELECT * from blah blah blah where this="+that,function(err,rows){
//         //rows contain values while errors, well you can figure out.
//         });
// }

// db.close();

export class SQLiteDbHandler {
    private dbFilePath: string = "E:\\Learning Resources\\Azure\\TechLegal\\TestDatabase.db";
    private db: Database;
    constructor() {
        this.db = new Database(this.dbFilePath);
    }

    /**
     * Function to Save New Case  DB 
    */
    public addCase(newCase: Case) {

        //Perform INSERT operation.
        // db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");
    }

    /**
    * Function to Save New Case  DB
    */

    public async getCases(query: string): Promise<Case[]> {
        query = "Select rowid,* from  LegalCases;"
        var cases:Case[] = 
        await this.db.all(query, function (err, rows) {
            if (err) {
                console.log("Error Occured while querying Database.")
                rejects(err);
            }
            else {
                console.log("1- This should apear first.")
                var cases: Case[] = [];
                rows.forEach(row => {
                    var myCase:Case = new Case(row["rowid"],row["title"],row["judge"],row["type"],row["onBehalfOf"],row["status"],row["description"],"NA",row["nextHearingDate"]);
                    cases.push(myCase);
                    // console.log("Case Added.");
                    // console.log(myCase);
                    // console.log("--------------------");
                });
                return cases;
            }
        });
        console.log("2- This should apear Second Last.")
        return cases;
        // console.log("Returning Following number of Cases from Database.")
        // console.log(cases.length);
        // console.log("Done ! Returning Following Cases from Database.")
        // return cases;
    }

    /**
     * Function to Update Case Already Saved in DB
    */
    public updateCase(newCase: Case) {

    //Perform UPDATE operation
    // db.run("UPDATE table_name where condition");
}

    /**
     * Function to Delete Case from DB 
    */
    public deleteCase(caseId: string) {

    //Perform DELETE operation
    // db.run("DELETE * from table_name where condition");
}

    /**
     * Function to add Hearing of Case in DB
    */
    public addHearing(hearing: Hearing, caseId: number, officeId: number) {

}

    /**
     * Function to add Hearing of Case in DB
    */
    public updateHearing(hearing: Hearing, caseId: number, officeId: number) {

}

    /**
     * Function to add Hearing of Case in DB
    */
    public deleteHearing(hearingId: number, caseId: number, officeId: number) {

}

}