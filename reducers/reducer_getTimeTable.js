import { GET_TIMES_TABLE } from '../actions/index';

export default function(state = null, action){

  switch (action.type) {
    case GET_TIMES_TABLE:
      var data = action.payload;

      console.log("The answer is: ", data);
      return data;

  }
  return state;
}
