import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http, Headers } from '@angular/http';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'friend.component.html',
  styleUrls: [
     'hero-detail.component.css',
     'friend.component.css' 
     ]
})
export class FriendComponent implements OnInit {
  hero: Hero;
  friends: Hero[];
  adding:boolean = false;
  show:boolean = false;
  pendding:boolean = false;
  name:string;
  acept:string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private http:Http
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero())
      .subscribe(hero => this.hero = hero);
    this.route.params
      .switchMap((params: Params) => this.heroService.getHeroes())
      .subscribe(friends => this.friends = friends);
  }

  goBack(): void {
    this.location.back();
  }

  reset() {
    this.adding = false;
    this.show = true;
    this.pendding = false;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
    headers.append('Authorization', 'Bearer ' + this.hero.token);
    this.http
      .get('http://windchatapi.3ie.fr/api/friend/list', {
        headers: headers
      })
      .subscribe(data => {
        this.friends =<Hero[]>data.json();
        console.log(JSON.stringify(data.json()));

      }, error => {
        console.log(JSON.stringify(error.json()));
      });
        setTimeout(()=>{ console.log(this.friends);}, 3000);
     
    }

  delete(event) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
    headers.append('Authorization', 'Bearer ' + this.hero.token);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.http
      .delete('http://windchatapi.3ie.fr/api/friend/' + value , {
        headers: headers
      })
      .subscribe(data => {
        alert('contact deleted');
        console.log(JSON.stringify(data.json()));
      }, error => {
        alert('ERROR: contact not deleted');        
        console.log(JSON.stringify(error.json()));
      });
    }

    showPendding()
    {
        this.adding = false;
        this.show = false;
        this.pendding = true;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
        headers.append('Authorization', 'Bearer ' + this.hero.token);
        this.http
        .get('http://windchatapi.3ie.fr/api/friend/pendingList', {
            headers: headers
        })
        .subscribe(data => {
            this.friends =<Hero[]>data.json();
            console.log(JSON.stringify(data.json()));

        }, error => {
            alert(JSON.stringify(error.json()));
        });     
    }

     search()
    {
        this.adding = true;
        this.show = false;
        this.pendding = false;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
        headers.append('Authorization', 'Bearer ' + this.hero.token);
        this.http
        .get('http://windchatapi.3ie.fr/api/user/search/' + this.name, {
            headers: headers
        })
        .subscribe(data => {
            this.friends =<Hero[]>data.json();
            console.log(JSON.stringify(data.json()));

        }, error => {
            alert(JSON.stringify(error.json()));
        });     
    }

    becomeFriend(event)
    {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
        headers.append('Authorization', 'Bearer ' + this.hero.token);

        alert(value);
      this.http
        .post('http://windchatapi.3ie.fr/api/friend/',
          "{\"userName\": \""+ value +"\"}", {
            headers: headers
          })
          .subscribe(data => {
                alert(JSON.stringify(data.json()));            
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
    }

    accept(event)
    {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Api-Key', '{MQ1D7W@5O0-EYH4D9PPZC-6<2ZU8I6C0}');
        headers.append('Authorization', 'Bearer ' + this.hero.token);

        alert(value);
      this.http
        .put('http://windchatapi.3ie.fr/api/friend/'+ value +"/accept",
          "{\"isAccepted\": \""+ this.acept +"\"}", {
            headers: headers
          })
          .subscribe(data => {
                alert(JSON.stringify(data.json()));            
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
    }

}
