import { useEffect, useRef } from "react";

function Pagination({ page, setPage, hasMore }) {
  const loader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div
      ref={loader}
      className="text-center py-8"
    >
      {hasMore ? "Loading more..." : "No more movies"}
    </div>
  );
}

export default Pagination;