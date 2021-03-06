import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
inport MyAwesomeReactComponent from './MyAwesomeReactComponent';



const App = () => (
	<MuiThemeProvider>
		<MyAwesomeReactComponent />
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
