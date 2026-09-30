"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const SERVICES = [
  {
    title: "Strategic Business Planning",
    text: "Clear direction aligned with your long-term goals and vision.",
    img: "/images/svc-planning.jpg",
  },
  {
    title: "Business Analysis",
    text: "Evidence-based insight into what is really driving performance.",
    img: "/images/svc-analysis.jpg",
  },
  {
    title: "Go-To-Market Strategy",
    text: "Positioning, pricing, and channels that reach real buyers.",
    img: "/images/svc-gtm.jpg",
  },
  {
    title: "Operational Improvement",
    text: "Leaner processes that lift efficiency and everyday output.",
    img: "/images/svc-ops.jpg",
  },
  {
    title: "Customer Psychology & Neuro-Marketing",
    text: "Messaging and journeys built around how people actually decide.",
    img: "/images/svc-neuro.jpg",
  },
];

export default function ServicesSection() {
  const { ref: leftRef, inView: leftInView } = useReveal<HTMLDivElement>();
  const { ref: trackRevealRef, inView: trackInView } =
    useReveal<HTMLDivElement>();

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [index, setIndex] = useState(0);

  const selectSlide = (i: number) => {
    if (!swiper) return;

    // Swiper's loop mode uses duplicated slides internally, so we let
    // Swiper handle the correct real slide index.
    swiper.slideToLoop(i);
  };

  return (
    <section className="services-section" id="services">
      <div className="wrap svc-grid">
        <div
          ref={leftRef}
          data-reveal
          className={`svc-left${leftInView ? " in" : ""}`}
        >
          <div className="eyebrow on-dark lime-dot">Advisory Services</div>

          <h2>Strategic services for growing businesses.</h2>

          <p>
            Engagements are shaped around the decisions in front of you —
            from sharpening strategy to fixing the operations underneath it.
          </p>

          <a href="#contact" className="btn btn-lime">
            Discuss your project
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>

        <div
          ref={trackRevealRef}
          data-reveal
          className={`svc-track-wrap${trackInView ? " in" : ""}`}
        >
          <div className="svc-viewport">
            <Swiper
              modules={[Autoplay]}
              onSwiper={setSwiper}
              onSlideChange={(instance) => {
                setIndex(instance.realIndex);
              }}
              loop
              speed={650}
              slidesPerView={3}
              spaceBetween={18}
              grabCursor
              watchOverflow={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                980: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="svc-swiper"
            >
              {SERVICES.map((svc) => (
                <SwiperSlide className="svc-slide" key={svc.title}>
                  <div className="svc-card">
                    <div className="thumb">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        width={300}
                        height={206}
                        draggable={false}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="body">
                      <h3>{svc.title}</h3>
                      <p>{svc.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="svc-progress-row">
            <span className="svc-swipe-label">Auto-playing</span>

            <div className="svc-dots">
              {SERVICES.map((svc, i) => (
                <button
                  key={svc.title}
                  type="button"
                  className={`svc-dot${i === index ? " active" : ""}`}
                  aria-label={`Go to service ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => selectSlide(i)}
                />
              ))}
            </div>

            <div className="svc-arrows">
              <button
                className="svc-arrow"
                type="button"
                aria-label="Previous service"
                onClick={() => swiper?.slidePrev()}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                className="svc-arrow"
                type="button"
                aria-label="Next service"
                onClick={() => swiper?.slideNext()}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
