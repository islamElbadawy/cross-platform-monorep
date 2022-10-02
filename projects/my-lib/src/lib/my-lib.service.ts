import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  get testing(): string {
    return "my-lib works!";
  }
}
