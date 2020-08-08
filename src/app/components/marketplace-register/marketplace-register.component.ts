import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IRegisterMarketplace } from 'src/app/models/register-marketplace';
import * as fromRegisterMarketplace from '../../reducers/register-marketplace';
import { RegisterMarketplaceFail, RegisterMarketplaceSaveStep1, RegisterMarketplaceDecrement, RegisterMarketplaceSaveStep2, RegisterMarketplaceSaveStep3, RegisterMarketplaceSaveStep4, RegisterMarketplace } from '../../actions/marketplace'
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ColorEvent } from 'ngx-color';
@Component({
  selector: 'app-marketplace-register',
  templateUrl: './marketplace-register.component.html',
  styleUrls: ['./marketplace-register.component.scss']
})
export class MarketplaceRegisterComponent implements OnInit, OnDestroy {
  stepOneRegister: FormGroup
  currentConfig: any
  step = 1
  typesMarketplaceList = []
  currentindex = 0
  color="#ccc"
  selectedMarketplace: any;
  dataNewImageFile;
  color1:string;
  imgName;
  color2:string;
  iscolor1visible=false;
  iscolor2visible=false;
  dataNewImage;
  errors$: Observable<any>
  loading$: Observable<any>
  response$: Observable<any>
  isloading:boolean=true;
  register$: Observable<IRegisterMarketplace>
  startuploading=true;
  private subscriptions: Subscription[];
   register: IRegisterMarketplace;
  constructor(private formBuilder: FormBuilder,
    private store: Store<fromRegisterMarketplace.State>,
    
  ) {
    this.errors$ = this.store.pipe(select(fromRegisterMarketplace.getErrors));
    this.register$ = this.store.pipe(select(fromRegisterMarketplace.getRegisterData));
    this.response$ = this.store.pipe(select(fromRegisterMarketplace.Response));
    this.loading$ = this.store.pipe(select(fromRegisterMarketplace.isLoading));
    this.stepOneRegister = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.subscriptions = []
    this.typesMarketplaceList = [{
      name: "computing",
      img: "computing"
    },
    {
      name: "phones",
      img: "phone"
    },
    {
      name: "electronic",
      img: "electronic"
    },
    {
      name: "beauty",
      img: "shaver"
    },
    {
      name: "office",
      img: "cabinet"
    },
    {
      name: "sports",
      img: "dumbbells"
    }

    ];
    let self=this
    setTimeout(() => {
      this.disableStartup()
      console.log("finish",this.startuploading);
    }, 3000);
  }

  ngOnInit(): void {

    this.subscriptions.push(this.register$.pipe(
      concatMap(data => {

        return data ? from(this.setCurrentConfig(data)) : from([])
      })
    ).subscribe());
    // this.subscriptions.push(this.response$.pipe(
    //   concatMap(data => {

    //     return data ? from(this.setFinish(data)) : from([])
    //   })
    // ).subscribe());
    this.register$.subscribe((data)=>{
     if(data)this.register=data
    })

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());

  }

  disableStartup(){
    this.startuploading=!this.startuploading
  }
  nextstep() {
 //this.currentindex = this.currentindex + 1 > this.typesMarketplaceList.length ? this.currentindex : this.currentindex + 1

    switch (this.currentConfig.step) {
      case 1:
        if (!this.currentConfig.type) {
          this.store.dispatch(new RegisterMarketplaceFail("you must select one type"));
        }
        else {
console.log(this.selectedMarketplace);
          this.store.dispatch(new RegisterMarketplaceSaveStep1(this.selectedMarketplace))
        }
        break;
      case 2:
        if (!this.currentConfig.data.name || (!this.currentConfig.data.address1 || !this.currentConfig.data.address2)) {
          this.store.dispatch(new RegisterMarketplaceFail("you must fill all fields"));
        } else {
          this.store.dispatch(new RegisterMarketplaceSaveStep2({
            name: this.currentConfig.data.name,
            address1: this.currentConfig.data.address1,
            address2: this.currentConfig.data.address2
          }))

        }
        case 3:
          if (!this.color1 || !this.color2 || !this.dataNewImage) {
            // this.store.dispatch(new RegisterMarketplaceFail("you must select "));
          } else {
            this.store.dispatch(new RegisterMarketplaceSaveStep3({
              color1:this.color1,
              color2:this.color2,
              logo:this.dataNewImageFile
            }))
  
          }
          case 4:
            // !this.currentConfig.data.email || !this.currentConfig.data.password 
            if (!this.currentConfig.data.email || !this.currentConfig.data.password ) {
              this.store.dispatch(new RegisterMarketplaceFail("you must select "));
            } else {
              this.store.dispatch(new RegisterMarketplaceSaveStep4({
                email:this.currentConfig.data.email,
                password:this.currentConfig.data.password
              }))
              let obj=Object.assign({},this.currentConfig.data,{
                type:this.currentConfig.type
              })
              this.store.dispatch(new RegisterMarketplace(obj))
    
            }
      default:
        break;
    }
    
  }
  nextType() {
    console.log("heree..");
    // console.log(this.typesMarketplaceList);
   // this.currentindex = this.currentindex + 1 > this.typesMarketplaceList.length ? this.currentindex : this.currentindex + 1

  }
  computedListItem() {
    let x = this.typesMarketplaceList.splice(this.currentindex, this.typesMarketplaceList.length)
    return x
  }

  prevstep() {
    console.log(this.currentConfig.step);
    if (this.currentConfig.step - 1 !== 0) {
      console.log("dispatching...");
      this.store.dispatch(new RegisterMarketplaceDecrement())
    }

  }

  setMarketType(type) {
    this.currentConfig.type = type
  }


  async setCurrentConfig(cfg) {
    let p = new Promise((resolve, reject) => {
      this.currentConfig = cfg
      resolve(true)

    });
    await p
  }
  async setFinish(data){
    let self=this
  let p= new Promise((resolve, reject) => {
   
    self.isloading=false
    resolve(true)
  });
  await p


  }
  computedColor1(){
    return {
      'background-color':this.color1
    }
  }
  computedColor2(){
    return {
      'background-color':this.color2
    }
  }
  pcikColor1($event: ColorEvent){
    this.color1=$event.color.hex
    this.iscolor1visible=!this.iscolor1visible
  }
  pcikColor2($event: ColorEvent){
    this.color2=$event.color.hex
    this.iscolor2visible=!this.iscolor2visible
  }
  setColor1Visbility(){
    this.iscolor1visible=!this.iscolor1visible
  }
  setColor2Visbility(){
    this.iscolor2visible=!this.iscolor2visible
  }

  onImageChaneg(event){
    var input = event.target;

    let self = this;
    if (input.files && input.files[0]) {
     this.imgName=input.files[0].name;
      this.dataNewImageFile = input.files[0];
      var reader = new FileReader();
      reader.onload = e => {
        this.dataNewImage = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
