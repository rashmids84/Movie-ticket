export class User {
    id: number;
    name: string;
    emailID: string;
    password: string;

    constructor(name:string, emailid:string, password:string) {
        this.name = name;
        this.emailID = emailid;
        this.password = password;

    }

} 