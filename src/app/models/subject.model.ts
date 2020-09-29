export class Subject {
    _id? : number;
    code: number;
     name: string;
     knownAs: string;
     semester: number;
     deptName: string;
    //dept_Id:{type: mongoose.Schema.Types.Number, ref: 'department'};
    // CreatedDateInt: String;
    // UpdatedDateInt: String;
}
