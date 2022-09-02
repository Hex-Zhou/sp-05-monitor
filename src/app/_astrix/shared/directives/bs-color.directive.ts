import { tyBSColor } from "./../models/bs-all-color.type";
import {
	Directive,
	ElementRef,
	HostBinding,
	Input,
	OnChanges,
	Renderer2,
	SimpleChanges,
} from "@angular/core";

@Directive({
	selector: "[appBsColor]",
})
export class BsColorDirective implements OnChanges {
	@Input() textColor: tyBSColor | null = null;
	@Input() bgColor: tyBSColor | null = null;
	@Input() light: boolean = false;
	constructor(private r2: Renderer2, private elemRef: ElementRef) {}
	ngOnChanges(changes: SimpleChanges): void {
		const light = this.light ? "light-" : "";
		if (changes["textColor"]) {
			this.r2.addClass(this.elemRef.nativeElement, `text-${light}${this.textColor}`);
		}
		if (changes["bgColor"]) {
			this.r2.addClass(this.elemRef.nativeElement, `bg-${light}${this.bgColor}`);
		}
	}
}
