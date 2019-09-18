import * as fromActions from '../action/cricket.action';
import {Cricket} from '../../cricket.model';

export interface cricketstate{

    data:string;
}

export const initialState:cricketstate= {
    data:null
}

export function cricketReducer(state=initialState, action: fromActions.CricketActions): cricketstate{

    switch(action.type){
        case fromActions.ADD_CRICKETER:{
            console.log("Acton add crickeer has ben called"+ action.payload)
            return{
                ...state
            }
        }

        case fromActions.ADD_CRICKETER_SUCCESS:{
            console.log("This has been called form the effects nd this will add the cricketer");

    
        }
    }


}
