import './App.css';
import { useState } from "react";
import './utils/interact.jsx';
import Lake from './Lake'
import Minter from './Minter'

export default function App() {
	return (
		<div className="App">
			<Lake/>
			<Minter></Minter>
		</div>
	);
}
