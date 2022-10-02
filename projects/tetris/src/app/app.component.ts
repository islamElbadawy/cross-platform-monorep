import { Component } from '@angular/core';
import { GameEngineLibService } from '@game-engine-lib';
import { MyLibService } from '@my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';

  constructor(private engineService: GameEngineLibService, private myLib: MyLibService) {
    console.info(engineService.testing);
    console.info(myLib.testing)
  }
}
