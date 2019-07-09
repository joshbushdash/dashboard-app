import { Component, OnInit } from '@angular/core';
import { Server } from '../../Shared/server'

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-1', isOnline: true},
  {id: 2, name: 'dev-2', isOnline: true},
  {id: 3, name: 'dev-3', isOnline: false},
  {id: 4, name: 'dev-4', isOnline: true},
]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
