function TimerController($scope, $timeout) {
    $scope.remaining = 0;
    $scope.left = false;

    var ending = new Date("July 2, 2013 17:30:00");
    var countDown = function() {
        var current = new Date();

        $scope.remaining = ending - current;

        if ($scope.remaining < 0) {
            $scope.left = true;
        }

        $timeout(countDown, 1000);
    };

    $timeout(countDown(), 1000);
}