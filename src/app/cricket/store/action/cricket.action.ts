import {Action} from '@ngrx/store';

export const ADD_CRICKETER='ADD_CRICKETER';
export const ADD_CRICKETER_SUCCESS='ADD_CRICKETER_SUCCESS';
export const ADD_CRICKETER_FAIL='ADD_CRICKETER_FAIL';

export class AddCricketer implements Action{
    readonly type = ADD_CRICKETER;
    constructor(public payload:any){}
}

export class AddCricketerSuccess implements Action{

    readonly type= ADD_CRICKETER_SUCCESS;
    constructor(public payload:any){}
}

export class AddCricketerFail implements Action{

    readonly type= ADD_CRICKETER_FAIL;
    constructor(public payload:any){}
}

export type CricketActions = AddCricketer | AddCricketerSuccess | AddCricketerFail;

