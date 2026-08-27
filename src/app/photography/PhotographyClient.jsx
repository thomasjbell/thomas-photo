"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import justifiedLayout from "justified-layout";
import { photographyItems } from "../../utils/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "../../components/LoadingScreen";
import { PhotographyPortfolioSchema } from "../../components/StructuredData";

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm px-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxWidth: "min(90vw, 1400px)", maxHeight: "85vh" }}
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

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.18 }}
        className="mt-4 text-white/80 text-sm font-medium tracking-wide pointer-events-none"
      >
        {item.title}
      </motion.p>

      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
  );
}

export default function PhotographyClient() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.floor(entry.contentRect.width));
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

  // Compute layout using Flickr's justified-layout
  const layout = useMemo(() => {
    if (!containerWidth || !randomizedItems.length) return null;

    return justifiedLayout(
      randomizedItems.map((item) => item.aspectRatio),
      {
        containerWidth,
        targetRowHeight: 280,
        targetRowHeightTolerance: 0.25,
        boxSpacing: 8,
        containerPadding: 0,
        forceAspectRatio: false,
      },
    );
  }, [randomizedItems, containerWidth]);

  return (
    <>
      <PhotographyPortfolioSchema photos={photographyItems} />
      <LoadingScreen isLoading={isLoading} />

      <AnimatePresence mode="wait">
        {selected && (
          <Lightbox
            key={selected.id}
            item={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

      <section className="py-8" id="photography">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 bg-white/50 dark:bg-mono-500/50 backdrop-blur-sm border dark:border-mono-400 border-mono-200 p-6 md:p-8 drop-shadow-lg rounded-2xl">
            <h1 className="text-4xl font-black text-slate-900 dark:text-mono-200 mb-4">
              PHOTOGRAPHY
            </h1>
            <p className="text-lg text-mono-500 dark:text-mono-300 max-w-2xl mx-auto">
              Explore a selection of my best work across landscapes, wildlife,
              and automotive photography.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-mono-500/50 backdrop-blur-sm border border-mono-200 dark:border-mono-400 drop-shadow-lg rounded-2xl p-4 md:p-6">
            {/* ref div measures available width */}
            <div ref={containerRef}>
              {layout && (
                <div
                  style={{
                    position: "relative",
                    height: layout.containerHeight,
                  }}
                >
                  {randomizedItems.map((item, index) => {
                    const box = layout.boxes[index];
                    if (!box) return null;
                    return (
                      <motion.div
                        key={item.id}
                        layoutId={`photo-${item.id}`}
                        onClick={() => setSelected(item)}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.02,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        style={{
                          position: "absolute",
                          top: box.top,
                          left: box.left,
                          width: box.width,
                          height: box.height,
                        }}
                        className="overflow-hidden rounded-xl cursor-pointer group"
                      >
                        <Image
                          src={item.imagePath}
                          alt={`${item.title} — photography by Thomas J Bell`}
                          width={Math.ceil(box.width)}
                          height={Math.ceil(box.height)}
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
