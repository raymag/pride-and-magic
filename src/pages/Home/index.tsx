import "./index.css";

const Home = () => {
	return (
		<div id='home'>
			<div className='content-box'>
                <h1>Pride and Magic</h1>
				<div className='input-group'>
					<span>Enter match:</span>
					<input type='text' id='matchId' />
				</div>
				<button className='btn'>New Match</button>
			</div>
		</div>
	);
};

export default Home;
