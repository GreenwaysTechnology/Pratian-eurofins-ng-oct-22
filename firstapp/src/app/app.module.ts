import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header.component";

//configuration ; angular looks this configuration in order to create objects
//angular offers three major configuration section
//declartions,imports,providers
@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}