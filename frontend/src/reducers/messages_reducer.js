import { RECEIVE_NEW_MESSAGE } from '../actions/message_actions';

const MessagesReducer = (
    state = { messages: {} },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEW_MESSAGE:
            newState.messages[action.message.id] = action.message;
            return newState;
        default:
            return state;
    }
};

export default MessagesReducer;