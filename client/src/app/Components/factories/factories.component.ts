import { Component, OnInit } from '@angular/core';
import {Factory} from "../../factory";
import {FactoryService} from "../../factory.service";

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {

  factories: Factory[] =[]

  constructor( private factoryService: FactoryService) { }

  ngOnInit(): void {
    this.getFactories()
    this.factoryService.createFactory().subscribe((response)=>{console.log(response)})
  }

  getFactories():void {
    this.factoryService.getFactories()
      .subscribe(factories=> this.factories = factories);
  }


}
