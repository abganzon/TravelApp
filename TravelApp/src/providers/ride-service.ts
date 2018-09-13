import { Injectable } from '@angular/core';
import * as ApiConf from '../config/api';
import 'rxjs/add/operator/map';
import { HttpService } from '../providers/http-service';
@Injectable()
export class RideService{

	constructor(public http: HttpService) {}

	getActiveTours() {
		return this.http.get(ApiConf.active_tours + '/activetours');
	}

}


