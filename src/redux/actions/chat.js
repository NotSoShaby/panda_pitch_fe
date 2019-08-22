export const createChannel = data => ({ type: 'CREATE_CHANNEL', payload: data });
export const getAllChannels = data => ({ type: 'GET_USER_CHANNELS', payload: data });
export const getChannelByChannelId = data => ({ type: 'GET_CHANNEL_BY_ID', payload: data });
