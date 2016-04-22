function basicEditController($stateParams, basicService, $sce) {
  'ngInject';

  console.log("susana");

  //como estou a carregar um JSON, tenho de por o then para fazer o resto
  //só quando o fich JSON estiver lido
  if ($stateParams.id != null){
    let self = this;
    self.details = basicService.getBasic($stateParams.id).then(function(lista){
    self.details = lista.data[$stateParams.id - 1];
    self.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+ self.details.url+'?autoplay=1');
  });



  }

  self.saveForm = function (data) {
    console.log(data);

  }

}

export default {
  name: 'basicEditController',
  fn: basicEditController
};
