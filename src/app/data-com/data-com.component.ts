import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-com',
  templateUrl: './data-com.component.html',
  styleUrls: ['./data-com.component.less'],
  encapsulation: ViewEncapsulation.None//ViewEncapsulation.Native/ViewEncapsulation.Emulated(默认值)
})
export class DataComComponent implements OnInit {
  serverElements = [{
    type:'server',
    name:'测试名称',
    content:'测试内容'
  }];
  onServerAdded(serverData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBlueprintAdded(serverData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  
  constructor() {
 
  }

  ngOnInit(): void {
  }

}
