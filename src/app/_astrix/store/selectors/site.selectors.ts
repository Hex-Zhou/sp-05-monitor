import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";
import { siteFeatureKey } from "../reducers/site.reducer";

export const selectSite = createFeatureSelector<AppState>(siteFeatureKey);
