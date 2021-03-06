import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RestaurantService} from "./services/restaurant.service";
import {OrderService} from "./services/order.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [RestaurantService, OrderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
