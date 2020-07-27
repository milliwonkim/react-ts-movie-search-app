import React, { useReducer, createContext } from 'react';
import { MovieReducer, SEARCH_MOVIE_ACTION } from './reducer';
import { MoviesState } from './type';

const INITIAL_STATE: MoviesState = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    errorMessage: '',
    auth: !false,
};

const AppContext = createContext<
    typeof INITIAL_STATE & {
        dispatch: (action: SEARCH_MOVIE_ACTION) => void;
    }
>({
    ...INITIAL_STATE,
    dispatch: () => {},
});
const { Consumer, Provider } = AppContext;

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    return (
        <Provider
            value={{
                ...state,
                dispatch,
            }}>
            {children}
        </Provider>
    );
};

export { AppProvider, Consumer as AppConsumer, AppContext };
