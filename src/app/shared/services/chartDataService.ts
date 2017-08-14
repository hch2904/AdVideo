import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChartDataService {
	constructor(private _http: Http){}
	public getChartData = function(){
		return this._http.get('http://10.68.100.77:8077/AdVideo/getData').map((res: Response) => res.json())
	}
}
