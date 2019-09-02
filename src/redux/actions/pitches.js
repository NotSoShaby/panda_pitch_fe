import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

export const getPrPitches = data => ({ type: 'GET_PR_PITCHES', payload: data });
export const getPrClientsAuto = () => ({ type: 'GET_PR_CLIENTS_AUTO' });
export const getPrClient = () => ({ type: 'GET_PR_CLIENT' });
export const getClients = () => ({ type: 'GET_CLIENTS' });
export const getInterests = () => ({ type: 'GET_INTERESTS' });
export const getClientsAuto = data => ({ type: 'GET_CLIENTS_AUTOCOMPLETE', payload: data });
export const findJournalist = data => ({ type: 'FIND_JOURNALIST', payload: data });
export const getMediaList = data => ({ type: 'GET_MEDIA_LIST', payload: data });
export const getPr = () => ({ type: 'GET_PR' });
export const getPitchById = data => ({ type: 'GET_PITCH_BY_ID', payload: data });
export const removeJournalist = data => Request(`${CONSTANT.CREATE_PITCH_FORM2_URL}${data}/`, 'delete');
export const deletePitchById = data => ({ type: 'DELETE_PITCH_BY_ID', payload: data });
