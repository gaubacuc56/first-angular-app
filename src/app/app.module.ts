import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AddTaskFormComponent } from './pages/to-do-list/section/add-task-form/add-task-form.component';
import { TaskListComponent } from './pages/to-do-list/section/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent,
    CalculatorComponent,
    AddTaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
