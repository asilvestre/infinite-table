import InfiniteScroll from './../infiniteScroll.js';
// FAKER
function slicer(data){
    var i,j,temparray,chunk = 20;
    for (i=0,j=data.length; i<j; i+=chunk) {
        temparray = data.slice(i,i+chunk);

    }

    return temparray;
}
InfiniteScroll.prototype.faker = function() {
console.log('hier');
            var xhr = typeof XMLHttpRequest != 'undefined'
                ? new XMLHttpRequest()
                : new ActiveXObject('Microsoft.XMLHTTP');
            xhr.open('get', 'example/exampleData.json', true);
            xhr.onreadystatechange = function() {
                var status;
                var data;
                // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
                if (xhr.readyState == 4) { // `DONE`
                    status = xhr.status;
                    if (status == 200) {
                        data = JSON.parse(xhr.responseText);
                        data = slicer(data);
                        this.handleResponse(data);
                    } else {

                    }
                }
            }.bind(this);
            xhr.send();

    };

    new InfiniteScroll('example', {
        transport: 'faker',
        url: '/example/exampleData.json',
        fields: {
            name:{},
            balance:{},
            phone:{}
        }
    })

