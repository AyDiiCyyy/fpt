var app = angular.module('appRoute',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/product/list', {
        templateUrl: './views/product/list.html',
        controller: ProductListController
    }).when('/product/add', {
        templateUrl: './views/product/add.html',
        controller : ProductAddController
    }).when('/product/detail/:id', {
        templateUrl: './views/product/detail.html',
        controller: ProductDetailController
    }).when('/product/edit/:id', {
        templateUrl: './views/product/edit.html',
        controller: ProductEditController
    }).when('/', {
        templateUrl: './views/category/list.html',
        controller: CategoryListController
    }).when('/category/add', {
        templateUrl: './views/category/add.html',
        controller: CategoryAddController
    }).when('/category/detail/:id', {
        templateUrl: './views/category/detail.html',
        controller: CategoryDetailController
    }).when('/category/edit/:id', {
        templateUrl: './views/category/edit.html',
        controller: CategoryEditController
    })
})