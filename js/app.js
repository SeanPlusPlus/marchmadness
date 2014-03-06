var madnessApp = angular.module('madnessApp', []);

madnessApp.controller('MainCtrl', function ($scope) {

  var cols = 10;
  $scope.cols = ['a'];
  for (var i = 0; i < cols; i++) {
    var my_string = $scope.cols[i];
    var str = my_string.substring(0,my_string.length-1)+String.fromCharCode(my_string.charCodeAt(my_string.length-1)+1);
    $scope.cols.push(str);
  }

  var rows = 31;
  $scope.rows = [];
  for (var i = 0; i < rows; i++) {
    $scope.rows.push(i);
  }
});

