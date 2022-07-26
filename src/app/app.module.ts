import { CourseService } from './course/course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [AppComponent, CourseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
