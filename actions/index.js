export const GET_TIMES_TABLE = 'GET_TIMES_TABLE';

export function getTimesTable(times_table){
  return {
    type: GET_TIMES_TABLE,
    payload: times_table
  }
}
