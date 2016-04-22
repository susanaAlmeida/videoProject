function birthdayService($http) {
  'ngInject';
  var self = this;

  self.birthday = [{
    "id": 1,
    "date": "2015-04-02",
    "role": "System Architect",
    "beginDate": "March 2014",
    "firstName": "um nome",
    "cakeTime": "16:30",
    "icon": "birthday",
    "description": "Happy Birthday"
  },
  {
    "id": 2,
    "date": "2015-04-02",
    "role": "SDevsdff ",
    "beginDate": "2015-04-02",
    "firstName": "dois nome",
    "cakeTime": "cakeTime",
    "icon": "Ericsson",
    "description": "Descrição"
  }];

  self.getBirthday = function(id){
    return self.birthday[0];
  }

  self.getAll = function(){
    return self.birthday;
  }


  self.cutBirthday = function(id){
    //return self.birthday[0];
    console.log(id);
  }


}

export default {
  name: 'birthdayService',
  fn: birthdayService
};
