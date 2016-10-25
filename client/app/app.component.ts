import {Component} from "@angular/core";
import {OrderService} from "./services/order.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private _orderService:OrderService){
    }

    listAllOrders (){
        this._orderService.listAllOrders()
            .subscribe(() => {});
    }
}
