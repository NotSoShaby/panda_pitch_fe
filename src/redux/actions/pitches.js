export const getPrPitches = data => ({ type: 'GET_PR_PITCHES', payload: data });
export const getPrClientsAuto = () => ({ type: 'GET_PR_CLIENTS_AUTO' });
export const getPrClient = () => ({ type: 'GET_PR_CLIENT' });
export const getClients = () => ({ type: 'GET_CLIENTS' });
export const getInterests = () => ({ type: 'GET_INTERESTS' });
export const getClientsAuto = data => ({ type: 'GET_CLIENTS_AUTOCOMPLETE', payload: data });
// export const getPrMedialists = () => ({ type: 'GET_PR_MEDIALISTS' });
export const getPrMedialists = () => ({ type: 'GET_MEDIALISTS' });
export const getPr = () => ({ type: 'GET_PR' });
