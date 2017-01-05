import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule, CalendarEventTitleFormatter, CalendarDateFormatter } from 'angular-calendar';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { AppComponent } from './app.component';
import { DraggableHelper } from 'angular-draggable-droppable';
import { DemoUtilsModule } from './demo-utils/module';
import { EventService } from './services/event.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DemoUtilsModule,
    CalendarModule.forRoot()
  ],
  providers: [
     CalendarDateFormatter,
    {provide: CalendarEventTitleFormatter, useClass: CustomEventTitleFormatter},
     DraggableHelper,
     EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
