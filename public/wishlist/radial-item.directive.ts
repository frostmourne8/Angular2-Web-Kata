import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[radial-item]' })
export class RadialItemDirective {

    @Input('radial-item') index: number;
    @Input('radial-count') count: number; 

    constructor(private el: ElementRef, private renderer: Renderer) {        
        renderer.setElementClass(el.nativeElement, 'menu_item', true);
        renderer.setElementClass(el.nativeElement, 'centered', true);
        renderer.setElementClass(el.nativeElement, 'menu_item_animation', true);
     }

    public ngOnInit() {
        let angle = this.getAngleForItem(this.index, this.count);
        let transform = this.getMenuTransform(angle, 285);

        setTimeout(() => {
            this.renderer.setElementStyle(this.el.nativeElement, 'transform', transform);
        }, 500);        
    }

    private getAngleForItem(index, count): number {
        var degIncrement = 360 / count;
        return 90 + degIncrement * index;
    }

    private getMenuTransform(degrees, radius) {
        return 'rotate(' + degrees + 'deg) translate(-' + radius + 'px) rotate(-' + degrees + 'deg)';
    }
}
