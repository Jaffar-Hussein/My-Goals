// export class Goal {
//     id!: number;
//     name!: string;
//     description!:string;
// }
export class Goal {
    descriptionVisibility: boolean;
    constructor(public id: number, public name: string, public description: string, public newDate: Date) {
        this.descriptionVisibility = false;
    }
}
