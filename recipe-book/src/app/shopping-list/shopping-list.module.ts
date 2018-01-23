import {NgModule} from "@angular/core";
// import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
//
import {ShoppingListAddComponent} from "./shopping-list-add/shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [
    SharedModule,
    // CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
