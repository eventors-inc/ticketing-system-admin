import { Time } from '@angular/common';

export default interface timetable{
    busnumber:string,
    from:string,
    to:string,
    date:Date,
    time:Time,
    routenum:string
}