// export class Goal {
//     id!: number;
//     name!: string;
//     description!:string;
// }
export class Goal {
    descriptionVisibility: boolean;
    constructor(public id: number, public name: string, public description: string) {
        this.descriptionVisibility = false;
    }
}
