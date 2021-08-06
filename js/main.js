function EmployeeViewModel() {
  var self = this;

  var employees =
        [
          {
            '_id'           : '5ce810ad54179c3c5467ae6e',
            'index'         : 0,
            'guid'          : '45567a44-aaf6-45c3-aea5-35c9a2c1cf56',
            'isActive'      : true,
            'picture'       : 'http://placehold.it/100x100',
            'birthday'      : 'Nov 8, 1981',
            'name'          : {
              'first': 'Carey',
              'last' : 'Ford'
            },
            'email'         : 'cford@northern.co',
            'phone'         : '+1 (879) 500-2938',
            'address'       : '806 Bethel Loop, Thynedale',
            'about'         : 'Cupidatat proident cupidatat id ad nostrud exercitation mollit sint irure aliquip. Ut est exercitation ad non Lorem consectetur aliquip et ex ea. Fugiat nulla elit ullamco laborum officia cupidatat. Ullamco commodo dolor do voluptate elit cupidatat Lorem. Aliqua esse dolore ullamco amet sunt. Ea eiusmod magna ex consectetur reprehenderit reprehenderit nostrud officia Lorem eu ipsum velit. Cupidatat consequat deserunt Lorem magna.',
            'registered'    : 'Friday, May 10, 2019 9:48 PM',
            'greeting'      : 'Hello, Carey! You have 10 unread messages.',
            'favoriteAnimal': 'rabbit',
            'department'    : 'design'
          },
          {
            '_id'           : '5ce810ad74f72e10e3917ac4',
            'index'         : 1,
            'guid'          : '5e23bb80-1b32-43db-8ef5-5d28c885f7e1',
            'isActive'      : false,
            'picture'       : 'http://placehold.it/100x100',
            'birthday'      : 'Apr 25, 1977',
            'name'          : {
              'first': 'Strong',
              'last' : 'Landry'
            },
            'email'         : 'slandry@northern.co',
            'phone'         : '+1 (898) 582-3043',
            'address'       : '735 Sedgwick Place, Catherine',
            'about'         : 'Consectetur eu laborum laboris id ex incididunt cillum aute. Non cillum est duis cillum. Sit et in excepteur consequat ut ex dolore voluptate laborum dolor exercitation. Aute nulla eu et sit exercitation occaecat adipisicing ut id. Consequat fugiat aliqua magna ipsum magna veniam incididunt esse deserunt sit ut fugiat commodo ex. Velit commodo nulla ipsum est culpa laborum minim est cupidatat ex Lorem minim in. Commodo ullamco aliqua duis minim ipsum et exercitation eiusmod Lorem sint.',
            'registered'    : 'Saturday, August 4, 2018 9:35 AM',
            'greeting'      : 'Hello, Strong! You have 10 unread messages.',
            'favoriteAnimal': 'bear',
            'department'    : 'sales'
          },
        ];


  self.availableAnimals = ko.observableArray(['Bear', 'Dog', 'Rabbit']);

  self.inventory = ko.observableArray(employees);
  self.isActive = ko.observable(false);


  self.addEmployee = function() {
    //self.inventory.push("", self.employees);
  }

}

ko.applyBindings(new EmployeeViewModel());
