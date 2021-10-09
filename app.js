const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes.js");

const app = express();


//Connect to DB and LISTEN
const dbURI = "mongodb+srv://[username]:[pwd]@cluster0.roysm.mongodb.net/netninja_tut?retryWrites=true&w=majority";
mongoose.connect(dbURI)
 .then( result => { console.log("Connected to DB!"); app.listen(3000); })
    .catch( err => { console.log("Oops! " + err);});

//Fallback Data
const blogs = [
    {title: "Akira goes Shopping", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {title: "Yami burns the Toilet", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {title: "Jun sees a Rainbow", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
];

//Register View Engine
app.set("view engine", "ejs");

//MIDDLEWARE and STATIC
app.use(express.static("public"));
// app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));

//GET REQUESTS - HOME
app.get("/", (req, res)=>{
    res.redirect("/blogs");
});

//BLOG REQUESTS
app.use("/blogs",blogRoutes);

//GET REQUEST - ABOUT
app.get("/about", (req, res)=>{
    // res.sendFile("./views/about.html", {root: __dirname});
    res.render("about", {title: "About"});
});


//404 PAGE - this must be at the bottom, as the code is unscoped (fires unconditionally)
app.use((req, res)=>{
    // res.status(404).sendFile("./views/404.html", {root: __dirname});
    res.status(404).render("404", {title: "404"});
});





//References

//Mongoose and Mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog",
//         snippet: "about my new blog",
//         body: "more about my new blog"
//     });

//     blog.save()
//         .then( result => {
//             res.send(result);
//         }) 
//         .catch( err => {
//             console.log(err);
//         });
// });

// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then( result => {
//             res.send(result);
//         })
//         .catch( err => {
//             console.log(err);
//         });
// });

// app.get("/single-blog", (req, res) => {
//     Blog.findById("615ab9d9ee4e07f6610ff60d")
//         .then( result => {
//             res.send(result);
//         })
//         .catch( err => {
//             console.log(err);
//         });
// })
