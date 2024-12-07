import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BearpassService {
  private mid: string | null = null; 
  constructor() { }
  setMid(mid:string){
    this.mid=mid
  }
  getMid(){
    return this.mid
  }
}
