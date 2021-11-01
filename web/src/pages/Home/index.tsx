import { useRef } from "react";
import { v4 as uuid } from "uuid";

import "./index.css";

const Home = () => {
	const matchFieldRef: any = useRef(null);
	function enterMatch() {
		if (matchFieldRef.current) {
			const matchId = matchFieldRef.current.value;
			if (matchId) {
				window.location.href = "/match/" + matchId;
			}
		}
	}

	function newMatch() {
		const matchId = uuid();
		window.location.href = "/match/" + matchId;
	}

	return (
		<div id='home'>
			<div className='content-box'>
				<h1>Pride and Magic</h1>
				<div className='input-group'>
					<span>Enter match:</span>
					<input type='text' id='matchId' ref={matchFieldRef} />
				</div>
				<button className='btn btn-secondary' onClick={enterMatch}>
					Enter Match
				</button>
				<button className='btn' onClick={newMatch}>
					New Match
				</button>
			</div>
		</div>
	);
};

export default Home;
