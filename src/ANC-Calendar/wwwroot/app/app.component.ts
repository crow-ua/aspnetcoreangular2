import {Component, OnInit} from "angular2/core";
import {AsyncRoute, Router, RouteDefinition, RouteConfig, Location, ROUTER_DIRECTIVES} from "angular2/router";
import {StaticComponent} from "./components/static.component";

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    public routes: RouteDefinition[] = null;
    constructor(private router: Router,
        private location: Location) {

    }

    ngOnInit() {
        if (this.routes === null) {
            this.routes = [
                new AsyncRoute({
                    path: "/partial",
                    name: "Partial MVC View",
                    loader: () => System.import("app/components/mvc.component").then(c => c["MvcComponent"]),
					useAsDefault: true
                }),
                new AsyncRoute({
                    path: "/numbers",
                    name: "Web API Service call",
                    loader: () => System.import("app/components/api.component").then(c => c["ApiComponent"])
                }),
	            {
					path: "/static",
					component: StaticComponent,
					name: "Static Angular View"
	            }
            ];

            this.router.config(this.routes);
        }
    }

    getLinkStyle(route: RouteDefinition) {
        return this.location.path().indexOf(route.path) > -1;
    }
}