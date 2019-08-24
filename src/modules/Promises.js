var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);

    if( false ){
      reject({
        errorCode:400
      });
    }
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });
  

  var promise2 = 42;
  var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 5000, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log("All Done", values);
  });

/***
 * @ref https://javascript.info/fetch
 * */ 


 /*
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login)); 

  */