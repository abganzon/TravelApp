import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthGuard } from './auth-guard';

@Injectable()
export class HttpService {

  private headers: Object = {
  	"Content-Type": "application/json"
  };

  constructor(
    public http: Http,
    public guard: AuthGuard
  ) { }

  get(url: string, params = {}, options = {}, map_res=true)
  {
    if (params)
    {
      url += this.buid_query(params);
    }

  	let opts = this.concatOptions(options);
    let observable = this.http.get(url, opts);

  	return map_res ? this.mapToJson(observable) : observable;
  }

  post(url: string, body: any, options: Object = {}, map_res=true)
  {
  	let opts = this.concatOptions(options);
  	let data = typeof body === 'object' ? JSON.stringify(body) : body;
    let observable = this.http.post(url, data, opts);

  	return map_res ? this.mapToJson(observable) : observable;
  }

  private buid_query(params, query='', depth=0)
  {

    for(var i in params)
    {
      if (!params[i])
        continue;
      if (typeof params[i] === 'object')
      {
        if (depth)
        {
          query += '['+ i +']';
        }
        else query += (query ? '&' : '?') + i;

        query += this.buid_query(params[i], query, depth++);
      }
      else query += (query ? '&' : '?') + i + '=' + params[i];
    }
    return query;
  }

  private mapToJson(observable)
  {
  	return observable.map(res => res.json());
  }

  private concatOptions(options)
  {
    if (this.guard.token)
    {
      this.headers["Authorization"] = "bearer "+ this.guard.token;
  	}

    let opts = {
  		headers: new Headers(this.headers)
  	};

  	for(var i in options)
  	{
  		if (i == 'headers')
  		{
  			this.concatHeaders(options[i], opts.headers);
  		}
  	}

  	return opts;
  }

  private concatHeaders(headers, base)
  {
  	for(var i in headers)
  	{
  		base.set(i, headers[i]);
  	}
  }
}
