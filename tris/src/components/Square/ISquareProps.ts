

export default interface ISquare {

        haveADraw: boolean;
        board:string[];
        index:number;
        value:string;
        haveAWinner:boolean;
        onClick:(index:number) => void;
}