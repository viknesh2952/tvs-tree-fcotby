import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class SearchService {
  public searchResults: any[] = [];

  public gettree1: string;
  temp: any;
  // temp: any[];
  constructor(private readonly http: HttpClient) {
    this.gettree1 =
      "https://t-aistore.tvslsl.in:5002/api/v1/get_profile_hierarchy_detail_tree_order";
  }
  gettree() {
    return this.http.get(this.gettree1);
  }
}
