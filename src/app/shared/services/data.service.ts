import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class DataService {
    constructor(
        @Inject(String) private url: string,
        private http: HttpClient
    ) {}

    public getAll() {
        return this.http.get(this.url);
    }
}
