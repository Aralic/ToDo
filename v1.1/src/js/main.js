require.config({
    baseUrl: "js",
    paths: {
        // "zepto": "zepto",
        // "zepto.animate": "zepto.animate",
        // "zepto.touch": "zepto.touch"
    },
    shim: {
        // zepto: {
        //     exports: '$'
        // },
        // 'zepto.animate': ["zepto"],
        // 'zepto.touch': ["zepto"]
    }
});

require(["init", "catalog", "task"], function(init) {
    
});