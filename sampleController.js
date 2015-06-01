app.controller('myCtrl', function($scope, $timeout) {
  $scope.myModel = {};
  var timeout = null;
  var saveUpdates = function() {
    // .... save data to server
  };
  var debounceSaveUpdates = function(newVal, oldVal) {
    if (newVal != oldVal) {
      if (timeout) {
        $timeout.cancel(timeout)
      }
      timeout = $timeout(saveUpdates, 1000);  // 1000 = 1 second
    }
  };
  $scope.$watch('myModel.field1', debounceSaveUpdates)
  $scope.$watch('myModel.field2', debounceSaveUpdates)
});
