import { NgModule } from '@angular/core';
import { GameEngineLibComponent } from './game-engine-lib.component';
import { BoardComponent } from './components/board/board.component';
import { PieceComponent } from './components/piece/piece.component';



@NgModule({
  declarations: [
    GameEngineLibComponent,
    BoardComponent,
    PieceComponent
  ],
  imports: [
  ],
  exports: [
    GameEngineLibComponent
  ]
})
export class GameEngineLibModule { }
