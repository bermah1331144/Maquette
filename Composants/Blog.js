function Blog() {

    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    return (
    <>
        <BlogDetails blogId={blogId}/>
        
        <AddComment blogId={blogId}/>

        <CommentList blogId={blogId}/>
    </>
    )
}