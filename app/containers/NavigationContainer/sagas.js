// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {requestTopicsSucceeded, requestTopicsFailed } from './actions';

export function fetchTopicFromServer(){
	return fetch('http://localhost:3000/api/topics')
	       .then(response => response.json()); 
}

function* fetchTopics(){
	try{
		const topics  =  yield call(fetchTopicFromServer);
		console.log('topics from server', topics);
		yield put(requestTopicsSucceeded(topics));
	}catch(e){
		yield put(requestTopicsFailed(e.message));
	}
	
}
export function* fetchTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicSaga,
];
