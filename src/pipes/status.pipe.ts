import {PipeTransform, Pipe} from "angular2/core";
import { IN_PROGRESS, DONE } from "../constants/Statuses";

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform{

    transform(values:any, args:any[]):any {
        let status = args[0];
        if (status === IN_PROGRESS)
            return values.filter((todo) => !todo.done);
        else if (status === DONE)
            return values.filter((todo) => todo.done);
        return values;
    }

}