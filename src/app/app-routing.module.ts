import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarksComponent } from './edit-bookmarks/edit-bookmarks.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  { path: "bookmarks", component: BookmarksComponent, data: { tab: 1 } },
  { path: "bookmarks/add", component: AddBookmarkComponent },
  {
    path: "bookmarks/manage", component: ManageBookmarksComponent, children: [
      { path: ":id", component: EditBookmarksComponent },

    ]
  },

  { path: "todos", component: TodosComponent, data: { tab: 2 } },
  { path: "todos/add", component: AddTodoComponent },
  { path: "todos/:id", component: EditTodoComponent },
  { path: "notes", component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNotesComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
