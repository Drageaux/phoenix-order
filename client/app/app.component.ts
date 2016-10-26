import {Component} from "@angular/core";
import {RestaurantService} from "./services/restaurant.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    searchQuery: string;
    restaurants: any[] = [];

    constructor(private _restaurantService:RestaurantService) {
    }

    searchRestaurants(){
        this._restaurantService.searchRestaurants(this.searchQuery)
            .subscribe(res => {
                this.restaurants = res;
                console.log(res);
            });
    }

    selectRestaurant(restId: string){
        this._restaurantService.selectRestaurant(restId)
            .subscribe(res => {
                console.log(res);
            });
    }
}
