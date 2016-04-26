function basicController($window, $scope, videoService, $state) {
  'ngInject';

  // details = lista.data

  // COMO ESTOU A LER UM JSON TENHO DE POR ESTE CÓDIGO!!!
  let self = this;
  self.deleteSingleVideo = deleteSingleVideo;
  self.editBasic = editBasic;
  self.alteraBasic = alteraBasic;
  self.verificaFilme = verificaFilme;
  self.calculaId = calculaId;
  self.saveForm = saveForm;
  self.listaVideos = listaVideos;


  function listaVideos(){
    videoService.getVideos().then(function(res){
      self.videos = res.data;
    })
  }

  function deleteSingleVideo(eid){
    videoService.deleteSingleVideo(eid).then(function(res){
      $state.go($state.current, {} , {reload:true});
    })
  }

  function verificaFilme(data) {
    console.log(data);
    var dataToIns = {};
    dataToIns.url = data.url;
    dataToIns.firstName = data.firstName;
    var a = 0;
    var i = 0;
    while ( i < self.details.length) {
      if (self.details[i].url == data.url) {
        a =1;
      }
        i++;
    }
      if (a == 0) {
        console.log(data);
        saveForm(dataToIns);
      }
      else {
         alert('esse url ja existe')
      }
  }

  function calculaId() {
    self.proxID = self.details.length + 1;
    console.log(self.proxID);
  }

  function alteraBasic() {
    //campos dentro do objeto
    let dados = {
      editID: self.editID,
      editFirstName: self.editFirstName,
      editURL: self.editURL
    }
    for (var i = self.details.length - 1; i >= 0; i--) {
      if (self.details[i].id == dados.editID) {
         self.details[i].firstName = dados.editFirstName;
      }
    }
  }

  function editBasic(eid) {
    console.log(eid);
    for (var i = self.details.length - 1; i >= 0; i--) {
      if (self.details[i].id == eid) {
        self.editID = eid;
        self.editURL = self.details[i].url;
        self.editFirstName = self.details[i].firstName;
      }
    }
  }


  function saveForm(edata) {
    edata.id = self.details.length + 1;
    self.details.push(edata);
    console.log(self.details);
    $scope.data.firstName='';
    $scope.data.url='';
  }


  //   function limpaFormEditar() {
  //   self.editID=''
  //   self.editFirstName=''
  //   ;
  // }

  listaVideos();

}

export default {
  name: 'basicController',
  fn: basicController
};
