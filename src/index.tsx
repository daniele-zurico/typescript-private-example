import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from 'store/epics';
import rootReducer from 'store/reducers';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(epicMiddleware)
	)
);

epicMiddleware.run(rootEpic);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
