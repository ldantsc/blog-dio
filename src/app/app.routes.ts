import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PostsComponent } from "./pages/posts/posts.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "posts/:id", component: PostsComponent },
];
