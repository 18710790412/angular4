import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.less']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('content') test;
  newServerName = '';
  newServerContent = '';
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
    console.log(this.test)
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  // 对象的本地指向(给dom元素增加name,可以获取到该dom元素,从而获取dom元素的值)
  // onAddServer(nameInput){
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   })
  // }
  // onAddBlueprint(nameInput){
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   })
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
