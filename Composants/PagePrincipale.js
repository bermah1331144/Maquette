
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

function App() {
    return <>
        <Header />
        <NavBar />
        <BlogList />
        <Footer />
    </>
}