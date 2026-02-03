// import "./loading.css";

// export default function Loading() {
//   return (
//     <div className="loading-container">
//       <div className="spinner"></div>
//       <p>Loading...</p>
//     </div>
//   );
// }
import "./loading.css";

export default function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-text"></div>
    </div>
  );
}
