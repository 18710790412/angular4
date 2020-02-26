import { Component } from '@angular/core';

@Component({
  // selector: 'app-server',
  selector: '[app-server]',
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
  // styles:[
  //   `
  //   div{color:pink}
  //   `
  // ]
})
export class ServerComponent {
    msgUrl:string = 'http://s3m.nzwgs.com/galileo/764123-19f43456ebf5927c28601cc1cfe60e1d.jpg';
    btnDisable = false;
    constructor(){
      setTimeout(()=>{
         this.btnDisable = true; 
      },2000)
      this.directives = Math.random() > 0.5 ? '是' : '否';
    }
    clickStatus:string = '按钮没有点击';
    clickbtn = ()=>{
      this.clickStatus = '按钮点击过了';
      this.ngIfFlag = true;
      this.forArr.push(this.clickStatus);
    };
    inputStr = '';
    changeStr(event:any){
      console.log(event);
      this.inputStr = event.target.value;
    }
    ngIfFlag = false;
    //样式指令
    directives = '是';
    getColor1(){
      return this.directives === '是' ? 'green' : 'pink';
    }
    getColor2(){
      return this.directives === '否' ? 'green' : 'pink';
    }
    forArr = ['test1', 'test2', 'test3'];
}
