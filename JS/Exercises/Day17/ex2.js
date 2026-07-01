const comments = [
    { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
    { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
    { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
    { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
    { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
    { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
    { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];

const isValidComment = (comment) => !!comment.user?.trim() && comment.content?.trim().length >= 5 && typeof comment.rating === "number" && comment.rating >= 1 && comment.rating <= 5;

const filterValidComments = (comments) => comments.filter(isValidComment);

const getCommentStats = (validComments) => (
    {
        total: validComments.length,
        avgRating: (validComments.reduce((sum, comment) => sum + comment.rating, 0) / validComments.length).toFixed(1),
        totalLikes: validComments.reduce((sum, comment) => sum + comment.likes, 0),
        verifiedCount: validComments.filter(comment => comment.verified).length,
        topComment: validComments.reduce((top, comment) => comment.likes > top.likes ? comment : top, { likes: -1 })
    });

const formatComment = (comment) => `${"⭐".repeat(comment.rating)} | ${comment.user ?? "Ẩn danh"}${comment.verified ? " ✓" : ""} | ${comment.content} | 👍 ${comment.likes}`;

console.log(isValidComment(comments[3]));
console.log(filterValidComments(comments));
console.log(getCommentStats(filterValidComments(comments)));
console.log(formatComment(comments[0]));
