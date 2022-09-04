import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import * as fromSite from "./reducers/site.reducer";
export interface AppState {
	[fromSite.siteFeatureKey]: fromSite.State;
}
export const reducers: ActionReducerMap<AppState> = { [fromSite.siteFeatureKey]: fromSite.reducer };
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
