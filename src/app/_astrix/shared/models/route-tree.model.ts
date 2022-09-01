export interface iRouteTree {
	title: string;
	link?: string;
	icon?: string;
	permission?: number[];
	children?: iRouteTree[];
	root?: boolean;
}
