
  
      angular.module('lunchbox',[]).controller ('myfirstcontroller',myfirstcontroller);
      

  

  myfirstcontroller.$inject =['$scope'];

  function myfirstcontroller ($scope){
        
        $scope.list = '';
        $scope.msg = '';
        $scope.display=function()
        {
         
        let arr = $scope.list.split(',');
        let count =0;
        for(var i =0; i<arr.length; i++){
          if(arr[i].trim() !=='')
            count++;
        }

          if(count >0 && count<=3){
            $scope.msg = 'Enjoy!';
          }
          else if(count >3){
            $scope.msg = 'Too much!';
          }
        
        else
          {
             $scope.msg = 'please enter data';
          }

       
      }
      

      }
    