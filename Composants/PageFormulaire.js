ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

function App() {
    return <>
        <Header />
        <NavBar />
         <BlogCard />{/*------- ATTENTION PAS fonctionnelle------ */}
        <Footer />
    </>
}