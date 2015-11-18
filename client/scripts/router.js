Router.configure({
    layoutTemplate: 'layout'
});

Router.route("/", {
    name: "homeIndex"
});

Router.route("/useradd", {
    name: "useradd"
});