import { connect } from 'react-redux';
// import React from 'react';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
	let stations = {};
	songsArray.forEach((song) => {
		let genre = song.genre;
		if (stations[genre]) stations[genre].push(song);
			else stations[genre] = [song];
	});
	return stations;
}

const mapStateToProps = (state) => {
	return { 
		stations: convertSongsToStations(state.songs)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);

