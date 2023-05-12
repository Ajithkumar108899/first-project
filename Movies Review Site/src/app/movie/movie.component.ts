import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieserviceService } from '../movieservice.service';
import { Order } from '../order';
import { SuccessmessageComponent } from '../successmessage/successmessage.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  order:Order=<Order>{}

  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
  isOpen= false;

  constructor(private route: ActivatedRoute, private http: HttpClient,private service:MovieserviceService,
    private dailog:MatDialog) {}

  ngOnInit(): void{
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: {id: string; }) => movie.id == this.id);
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }


  create(){
    this.openPopup()
    this.service.createproduct(this.order).subscribe(data=>{
      console.log(data);
      
    })
  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

}
