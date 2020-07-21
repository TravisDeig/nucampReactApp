import { createStore, combineReducers, applyMiddleware } from 'redux';
import { creatForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...creatForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
