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
	/**
	 * ```
	 * 用途: formGroup
	 * ```
	 */
	@Input() gp: FormGroup;
	/**
	 * ```
	 * 用途: form-control-name
	 * ```
	 */
	@Input() ctrlName: string = "";
	/**
	 * ```
	 * 時機: 綁定在送出表單按下時
	 * 用途: 決定updateStyle機制是否能夠被觸發
	 * ```
	 */
	@Input() triggerBoo: boolean = true;
	constructor(private r2: Renderer2, private elemRef: ElementRef, private viewRef: ViewContainerRef) {}
	ngOnChanges(changes: SimpleChanges): void {
		if (this.triggerBoo) this.updateStyle();
	}
	ngOnInit(): void {
		this.gp.valueChanges.subscribe((r) => {
			if (this.triggerBoo) this.updateStyle();
		});
	}
	/**
	 * ```
	 * 時機: 表單送出後 || 觸發trigger後 form-ctrl 仍變動
	 * 用途: 讓輸入框變成 錯誤造型
	 * ```
	 */
	updateStyle() {
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
	/**
	 * ```
	 * 時機: 更新元素Style前
	 * 用途: 判別ctrl是否不符合驗證
	 * ```
	 */
	isInvalidControl() {
		let errors = this.gp.get(this.ctrlName)?.errors !== null;
		// let touched = this.gp.get(this.ctrlName)?.touched;
		return errors;
	}
}
/**
 * ```
 * 用途: 錯誤框下方的提示字
 * ```
 */
@Component({
	template: `
		<div class="fv-plugins-message-container invalid-feedback">錯誤或未填寫</div>
	`,
})
class TempComponent {}
