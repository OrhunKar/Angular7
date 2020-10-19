export class Admin {
    AID: number;
    ANAME: string;
    INFORMATION: string;
    LOGINNAME: string;
    LOGINPASSWORD: string;
}

export class AdminLogin {
    LOGINNAME: string;
    LOGINPASSWORD: string;
}

export class Teacher {
    TID: number;
    Tname: string;
    CourseID: number;
}

export class Student {
    SID: number;
    Sname: string;
    Infromation: string;
    CourseID: number;
}

export class Course {
    CID: number;
    Cname: string;
    Infromation: string;
    Contents: string;
    Link: string;
    Detail: string;
    Date: Date;
}