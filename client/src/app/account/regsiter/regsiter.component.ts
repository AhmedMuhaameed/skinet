import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, of, switchMap, timer } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss'],
})
export class RegsiterComponent implements OnInit {
  registerForm!: FormGroup;
  errors!:string[]
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegsiterForm();
  }

  createRegsiterForm(){
    this.registerForm = this.fb.group({
      displayName:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],[this.validateEmailNotTaken()]],
      password:[null,[Validators.required]],
    })
  }
  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe({
      next:(result)=>{
        this.router.navigateByUrl('/shop')
      },
      error:(err)=>{
        console.log(err);
        this.errors = err.errors;
      }
    })
    
  }
  validateEmailNotTaken():AsyncValidatorFn{
    return control=>{
      return timer(500).pipe(
        switchMap(()=>{
          if(!control.value){
            return of(null)
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map((res:any)=>{
              return res ? {emailExists:true}:null
            })
          )
        })
      )
    }
  }
}
