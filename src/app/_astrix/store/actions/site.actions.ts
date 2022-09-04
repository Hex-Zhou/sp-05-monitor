import { createAction, props } from "@ngrx/store";
import { iSite } from "../../shared/models/site.model";

export const getSites = createAction("[Site] Get Sites");
export const setSites = createAction("[Site] Set Sites", props<{ payload: iSite[] }>());
