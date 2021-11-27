import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconName: IconName = 'fingerprint';
  @Input() iconColor: 'string' | undefined;

  constructor() {}

  ngOnInit(): void {}
}
