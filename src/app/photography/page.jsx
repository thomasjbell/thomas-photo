"use client";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { photographyItems } from "../../utils/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "../../components/LoadingScreen";
import { PhotographyPortfolioSchema } from "../../components/StructuredData";

// Computes rows where every image fills its cell at its exact aspect ratio — no cropping
function useJustifiedLayout(
  items,
  containerWidth,
  targetRowHeight = 280,
  gap = 8,
) {
  return useMemo(() => {
    if (!containerWidth || !items.length) return [];

    const rows = [];
    let row = [];
    let rowAspectSum = 0;

    for (const item of items) {
      const a = item.aspectRatio;
      const projectedRowWidth =
        (rowAspectSum + a) * targetRowHeight + gap * row.length;

      if (projectedRowWidth > containerWidth && row.length > 0) {
        rows.push({ items: row, aspectSum: rowAspectSum, isLast: false });
        row = [item];
        rowAspectSum = a;
      } else {
        row.push(item);
        rowAspectSum += a;
      }
    }

    if (row.length) {
      rows.push({ items: row, aspectSum: rowAspectSum, isLast: true });
    }

    return rows.map((r) => {
      const totalGaps = gap * (r.items.length - 1);
      // Last row: use targetRowHeight so it doesn't stretch awkwardly
      const rowHeight = r.isLast
        ? Math.min(targetRowHeight, (containerWidth - totalGaps) / r.aspectSum)
        : (containerWidth - totalGaps) / r.aspectSum;

      return r.items.map((item) => ({
        ...item,
        width: Math.floor(rowHeight * item.aspectRatio),
        height: Math.floor(rowHeight),
      }));
    });
  }, [items, containerWidth, targetRowHeight, gap]);
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, exit: { delay: 0.25, duration: 0.15 } }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      >
        <motion.div
          layoutId={`photo-${item.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxWidth: "min(90vw, 1400px)", maxHeight: "85vh" }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 40,
            mass: 0.8,
          }}
        >
          <Image
            src={item.imagePath}
            alt={item.title}
            width={1400}
            height={1400}
            className="block"
            style={{
              maxWidth: "min(90vw, 1400px)",
              maxHeight: "85vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15, exit: { duration: 0.1 } }}
          className="mt-4 text-white/80 text-sm font-medium tracking-wide"
        >
          {item.title}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PhotographyPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Measure container width and watch for resize
  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const shuffled = shuffle(photographyItems);
    setRandomizedItems(shuffled);

    const preload = async () => {
      const critical = shuffled.slice(0, 3);
      const promises = critical.map(
        (item) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = item.imagePath;
          }),
      );
      await Promise.race([
        Promise.all(promises),
        new Promise((r) => setTimeout(r, 800)),
      ]);
      setTimeout(() => setIsLoading(false), 100);
    };

    if (shuffled.length > 0) preload();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const rows = useJustifiedLayout(randomizedItems, containerWidth);
  let globalIndex = 0;

  return (
    <>
      <PhotographyPortfolioSchema photos={photographyItems} />
      <LoadingScreen isLoading={isLoading} />

      {selected && (
        <Lightbox item={selected} onClose={() => setSelected(null)} />
      )}

      <section className="py-8 bg-mono-50 dark:bg-mono-500" id="photography">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 bg-white dark:bg-mono-500 border dark:border-mono-400 border-mono-200 p-6 md:p-8 drop-shadow-lg rounded-2xl">
            <h1 className="text-4xl font-black text-slate-900 dark:text-mono-200 mb-4">
              PHOTOGRAPHY
            </h1>
            <p className="text-lg text-mono-500 dark:text-mono-300 max-w-2xl mx-auto">
              Explore a selection of my best work across landscapes, wildlife,
              and automotive photography.
            </p>
          </div>

          <div className="bg-white dark:bg-mono-500 border border-mono-200 dark:border-mono-400 drop-shadow-lg rounded-2xl p-4 md:p-6">
            <div ref={containerRef}>
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: rowIndex < rows.length - 1 ? "8px" : 0,
                  }}
                >
                  {row.map((item) => {
                    const index = globalIndex++;
                    return (
                      <motion.div
                        key={item.id}
                        layoutId={`photo-${item.id}`}
                        onClick={() => setSelected(item)}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.025,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        style={{
                          width: item.width,
                          height: item.height,
                          flexShrink: 0,
                        }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group"
                      >
                        <Image
                          src={item.imagePath}
                          alt={`${item.title} — photography by Thomas J Bell`}
                          width={item.width}
                          height={item.height}
                          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index < 4}
                          loading={index < 4 ? "eager" : "lazy"}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end pointer-events-none">
                          <p className="text-white text-sm font-semibold px-3 py-2 w-full truncate">
                            {item.title}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
