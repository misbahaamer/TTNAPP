import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Candidate} from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatesTableService {

  private serviceUrl = 'http://localhost:5000/api/candidates';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.serviceUrl);
}


}
