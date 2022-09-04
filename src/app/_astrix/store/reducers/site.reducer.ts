import { Action, createReducer, on } from "@ngrx/store";
import * as SiteActions from "../actions/site.actions";
export const siteFeatureKey = "site";
export interface State {}
export const initialState: State = {};
export const reducer = createReducer(
	initialState,
	on(SiteActions.getSites, (state) => state),
	on(SiteActions.setSites, (state, { payload }) => ({ ...state, ...payload }))
);
