import { FormGroup } from "@angular/forms";
import {
	Component,
	Directive,
	ElementRef,
	Input,
	OnChanges,
	OnInit,
	Renderer2,
	SimpleChanges,
	ViewContainerRef,
} from "@angular/core";

@Directive({
	selector: "[appCtrlInvalid]",
})
export class CtrlInvalidDirective implements OnInit, OnChanges {
	@Input() gp: FormGroup;
	@Input() ctrlName: string = "";
	@Input() triggerBoo: boolean = true;
	constructor(private r2: Renderer2, private elemRef: ElementRef, private viewRef: ViewContainerRef) {}
	ngOnChanges(changes: SimpleChanges): void {
		if (this.triggerBoo) this.updateElement();
	}
	ngOnInit(): void {
		this.gp.valueChanges.subscribe((r) => {
			if (this.triggerBoo) this.updateElement();
		});
	}

	updateElement() {
		const el = this.elemRef.nativeElement;
		this.r2.removeClass(el, "border-danger");
		this.r2.removeClass(el, "border-dotted");
		this.viewRef.clear();
		if (this.isInvalidControl()) {
			this.r2.addClass(el, "border-danger");
			this.r2.addClass(el, "border-dotted");

			this.viewRef.createComponent(TempComponent);
		}
	}

	isInvalidControl() {
		let errors = this.gp.get(this.ctrlName)?.errors !== null;
		// let touched = this.gp.get(this.ctrlName)?.touched;
		return errors;
	}
}

@Component({
	template: `
		<div class="fv-plugins-message-container invalid-feedback">錯誤或未填寫</div>
	`,
})
class TempComponent {}
