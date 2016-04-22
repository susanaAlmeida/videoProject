function basicService($http) {
  'ngInject';
  var self = this;

  //vai buscar dados ao json!!!
  self.getBasic = function(id){
    return $http.get('data/lista.json');
  }

  self.getAll = function(){
    //LER DO JSON
    return $http.get('data/lista.json');
  }

  self.cutBasic = function(id){
    //return self.birthday[0];
    console.log(id);
  }


}

export default {
  name: 'basicService',
  fn: basicService
};
