import { Component, OnInit } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { BlogApiService } from "../../services/blog-api.service";

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./about-us.component.html",
  styleUrl: "./about-us.component.css",
})
export class AboutUsComponent implements OnInit {
  title: string = "About Us";
  aboutUsDescript: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  imageAboutUs: string = "assets/about-image.png";

  constructor() {}

  ngOnInit(): void {}
}
