import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  newsImage: string =
    'https://i.cbc.ca/1.6984147.1696196657!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/police-arrests-at-street-party.JPG';
  newsTitle: string = 'NOTÍCIA 1';
  newsText: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse reprehenderit optio sapiente, cum quas fugiat dicta incidunt! Laudantium voluptatem ut tenetur ipsa. Quam a, distinctio ratione laborum blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum officiis, ipsa accusamus eligendi delectus architecto excepturi! Veritatis temporibus commodi pariatur. Iure quas vero, ipsa in amet quibusdam sequi hic natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis totam est, molestiae unde et sapiente mollitia voluptatibus tempore repellendus voluptate iste, quas impedit quos voluptates doloribus quidem, harum eaque.';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
