import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as screenfull from 'screenfull';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username:string;
  rolename:string;
  profileImg:string;

  constructor() { 
    this.username = localStorage.getItem('currentUser');
    this.rolename = localStorage.getItem('rolename');
    this.profileImg = localStorage.getItem('imgSRC');
    this.CustomPageJS();
  }
  CustomPageJS() {
    $(".boxs-close").on("click", function() {
        $(this).parents(".card").addClass("closed").fadeOut()
    }), $(".theme-light-dark .t-dark").on("click", function() {
        $("body").toggleClass("menu_dark")
    }), $(".menu-sm").on("click", function() {
        $("body").toggleClass("menu_sm")
    }), $(".minileftbar .notifications").on("click", function() {
        $(".right_menu .notif-menu").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"), $(".right_menu .notif-menu").hasClass("open") ? $(".overlay").fadeIn() : $(".overlay").fadeOut()
    }), $(".minileftbar .task").on("click", function() {
        $(".right_menu .task-menu").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"), $(".right_menu .task-menu").hasClass("open") ? $(".overlay").fadeIn() : $(".overlay").fadeOut()
    }), $(".minileftbar .menuapp-btn").on("click", function() {
        $(".right_menu .menu-app").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"), $(".right_menu .menu-app").hasClass("open") ? $(".overlay").fadeIn() : $(".overlay").fadeOut()
    }), $(".minileftbar .js-right-sidebar").on("click", function() {
        $(".right_menu #rightsidebar").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"), $(".right_menu #rightsidebar").hasClass("open") ? $(".overlay").fadeIn() : $(".overlay").fadeOut()
    }), $(".minileftbar .bars").on("click", function() {
        $(".right_menu .sidebar").toggleClass("open stretchRight").siblings().removeClass("open stretchRight"), $(".right_menu .sidebar").hasClass("open stretchRight") ? $(".overlay").fadeIn() : $(".overlay").fadeOut()
    }), $(".overlay").on("click", function() {
        $(".open.stretchRight").removeClass("open stretchRight"), $(this).fadeOut()
    }), $(".btn_overlay").on("click", function() {
        $(".overlay_menu").fadeToggle(200), $(this).toggleClass("btn-open").toggleClass("btn-close")
    }),$(".form-control").on("focus", function() {
        $(this).parent(".input-group").addClass("input-group-focus")
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus")
    })
}




  ngOnInit() 
  {
    $('#fullscreen').on('click', event => {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
  });

    $(".menu-toggle").on("click", function(a) {
      var b = $(this),
          c = b.next();
      if ($(b.parents("ul")[0]).hasClass("list")) {
          var d = $(a.target).hasClass("menu-toggle") ? a.target : $(a.target).parents(".menu-toggle");
          $.each($(".menu-toggle.toggled").not(d).next(), function(a, b) {
              $(b).is(":visible") && ($(b).prev().toggleClass("toggled"), $(b).slideUp())
          })
      }
      b.toggleClass("toggled"), c.slideToggle(320)
  });
  this.CustomPageJS();
  }

}
