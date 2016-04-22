function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('basic',{
    url: '/basic',
    templateUrl: 'basic.html',
    controller: 'basicController',
    controllerAs: 'basic',
    title: 'Basic'
  })
  .state('basic-edit',{
    url: '/basic/:id',
    templateUrl: 'basic-edit.html',
    controller: 'basicEditController',
    controllerAs: 'basic',
    title: 'Basic'
  })
  .state('criar-form',{
    url: '/criar',
    templateUrl: 'criar.html',
    controller: 'basicController',
    controllerAs: 'basic',
    title: 'Basic'
  })
    .state('editar-form',{
    url: '/editar/:id',
    templateUrl: 'editar.html',
    controller: 'basicController',
    controllerAs: 'basic',
    title: 'Basic'
  })

  ;


}

export default OnConfig;
