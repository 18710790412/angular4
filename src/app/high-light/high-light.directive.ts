import { OnInit, Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
    constructor(private elementRef:ElementRef){

    }
    ngOnInit(){
        // this.elementRef.nativeElement.style.background = "pink";
        // this.elementRef.nativeElement.style.color = "green";
    }
    @Input() defaultColor:string = 'green';
    @Input('appHighLight') highLight:string = 'red';
    @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;
    @HostListener('mouseenter') mouseover(){
        // this.elementRef.nativeElement.style.background = "pink";
        this.elementRef.nativeElement.style.color = "#fff";
        this.backgroundColor = this.highLight;
    }
    @HostListener('mouseleave') mouseleave(){
        // this.elementRef.nativeElement.style.background = "transparent";
        this.elementRef.nativeElement.style.color = "#000";
        this.backgroundColor = this.defaultColor;
    }
}