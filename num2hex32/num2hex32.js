var Convert = require('numberconverter');

module.exports = function(RED) {
    "use strict";
    function converter(n) {
        RED.nodes.createNode(this,n);
        this.topic = n.topic;
        this.name = n.name;
        var node = this;
        var msg = {};
        msg.topic = this.topic;
        msg.name=this.name;
        msg.payload = "";
        var con = new Convert();
        this.on('input', function (msg) {
            var tmp=msg.payload;
            if(typeof(tmp)=="number")
            {
                var x=con.convert("dec",tmp.toString());
                msg.payload = x.hex032;
                node.send(msg);
            }else{
                msg.payload = null;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("num2hex32",converter);
};
