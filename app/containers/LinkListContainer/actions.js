/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_FAILED,
  REQUEST_LINK_SUCCEEDED
} from './constants';

export function requestLinksSucceeded(links){
	 return {
	 	 type : REQUEST_LINK_SUCCEEDED,
	 	 links,
	 }
};

export function requestLinksFailed(message){
	return {
		type : REQUEST_LINK_FAILED,
		message,
	}
};