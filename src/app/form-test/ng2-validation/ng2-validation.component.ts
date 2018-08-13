import { Component, OnInit } from '@angular/core';

// 1. 引入forms中的组件
import { FormGroup, FormControl,Validators } from '@angular/forms';
// 2. 引入ng2-validation中的组件
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-ng2-validation',
  templateUrl: './ng2-validation.component.html',
  styleUrls: ['./ng2-validation.component.css']
})
export class Ng2ValidationComponent implements OnInit {
  // 3. 定义表单组
  form: FormGroup;

  constructor() {
    // 初始化表达组里面的内容
    this.form = new FormGroup({
      // 定义form.field 是一个区间
      username: new FormControl('', CustomValidators.range([6, 20])),
      // 定义form.num 是数字类型
      age: new FormControl('', CustomValidators.number),
      sex: new FormControl('', Validators.required),
      position: new FormControl('', CustomValidators.range([2, 20])),
      habby: new FormControl('', CustomValidators.range([2, 50])),
      phone: new FormControl('', CustomValidators.phone("zh-CN")),
      email: new FormControl('', CustomValidators.email),
      url: new FormControl('', CustomValidators.url)
    });

  }

  ngOnInit() {
  }

}
