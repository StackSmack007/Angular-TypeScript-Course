import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appHoverBgr]"
})
export class HoverBgrDirective {
  @Input()
  colorSet: string[] = ["red", "white", "yellow", "black", "2000"];
  //["bgrColorHovered,bgrColorNotHovered,textColorHovered,textColorNotHovered,timedelayUponLeaving"]

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseover")
  mouseOver() {
         this.renderer.setStyle(
        this.el.nativeElement,
        "backgroundColor",
        this.colorSet[0]
      );
      this.renderer.setStyle(this.el.nativeElement, "color", this.colorSet[2]);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    setTimeout(() => {
      this.renderer.setStyle(
        this.el.nativeElement,
        "backgroundColor",
        this.colorSet[1]
      );
      this.renderer.setStyle(this.el.nativeElement, "color", this.colorSet[3]);
    }, +this.colorSet[4]);
  }
}
