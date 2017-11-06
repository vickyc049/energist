import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./map-card.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Google Maps</nb-card-header>
      <nb-card-body>
      <div style="padding: 15px;">
     <div class="row full-name-inputs">
     <div class="col-sm-4 input-group">
     <span class="input-group-addon primary">Layer</span>
     <select class="form-control">
     <option>Minsk</option>
     <option>Gomel</option>
     <option>Brest</option>
     <option>Grodno</option>
     <option>Mogilev</option>
     </select>
     </div>
     <div class="col-sm-6 input-group">
     <span class="input-group-addon primary">Geomatry</span>
     <select class="form-control">
     <option>Minsk</option>
     <option>Gomel</option>
     <option>Brest</option>
     <option>Grodno</option>
     <option>Mogilev</option>
     </select>
     </div>
   </div></div>
        <agm-map [latitude]="lat" [longitude]="lng">
          <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class MapCardComponent {

  lat = 51.678418;
  lng = 7.809007;
}
