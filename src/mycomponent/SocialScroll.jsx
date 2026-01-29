import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Scroll.css'
import pic1 from "../assests/pic_1.jpg"
import pic2 from "../assests/pic_2.jpg"
import pic3 from "../assests/pic_3.jpg"
import pic4 from "../assests/pic_4.jpg"
import pic5 from "../assests/pic_5.jpg"

const SocialScroll = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sections = section.querySelectorAll(".tabs_let-content");
      const videos = section.querySelectorAll(".tabs_video");
      
      if (sections.length === 0 || videos.length === 0) return;

      // Get the section's position relative to the viewport
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section has been scrolled
      const scrolled = Math.max(0, -sectionRect.top);
      const sectionHeight = sectionRect.height - windowHeight;
      const progress = Math.min(1, scrolled / sectionHeight);
      
      // Determine active section (0 to 4)
      let activeIndex = Math.floor(progress * sections.length);
      if (activeIndex >= sections.length) activeIndex = sections.length - 1;
      if (activeIndex < 0) activeIndex = 0;
      
      // Debug logging
      console.log('Scroll Debug:', {
        scrolled,
        progress: progress.toFixed(2),
        activeIndex,
        totalSections: sections.length,
        sectionTop: sectionRect.top
      });

      // Remove all is-1 classes
      sections.forEach((section) => {
        section.classList.remove("is-1");
      });
      videos.forEach((video) => {
        video.classList.remove("is-1");
      });

      // Add is-1 class to active section and video
      if (sections[activeIndex] && videos[activeIndex]) {
        sections[activeIndex].classList.add("is-1");
        videos[activeIndex].classList.add("is-1");
      }
    };

    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add event listener
    document.addEventListener("scroll", throttledScroll);
    
    // Initial call
    handleScroll();

    // Cleanup function
    return () => {
      document.removeEventListener("scroll", throttledScroll);
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative z-2 " >
      {/* Tabs Section */}
      <section className="section_tabs rounded-0">
        <div className="flex justify-center content-center items-center h-[10rem]">
          <h1 className="font-bold text-white text-[2rem]" id="social">
            Community & Social Activities
          </h1>
        </div>
        <div className="">
          <div className="tabs_height">
            <div className="tabs_sticky-wrapper">
              <div className="tabs_container">
                <div className="tabs_component">
                  {/* Left Content */}
                  <div className="tabs_left">
                    <div className="tabs_left-top">
                      <div className="tabs_let-content is-1">
                        <h2 className="heading-style-h4 text-color-gray100">
                          Organizing for Good: Cloth Donation Drive
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Led a social initiative to organize a cloth distribution drive, where my team and I collected clothes from students and faculty. Together, we sorted and folded the donations with care to prepare them for distribution. We then visited underprivileged communities to personally hand over the clothes, creating meaningful connections while spreading warmth and compassion.
                        </p>
                      </div>
                      <div className="tabs_let-content">
                        <h2 className="heading-style-h4 text-color-gray100">
                          Nukkad Natak: Spreading Health & Cleanliness Awareness  
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Participated in a Nukkad Natak aimed at raising awareness about dengue prevention. Along with my team, we performed for students and faculty to spread the message of keeping surroundings clean and avoiding garbage on roads. Through street play, we delivered an engaging and impactful message that inspired the community to take responsibility for public health and hygiene.
                        </p>
                      </div>
                      <div className="tabs_let-content">
                        <h2 className="heading-style-h4 text-color-gray100">
                          NSS Camp: Teaching & Community Engagement in Village Schools
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Participated in an NSS camp where we visited village schools to teach, interact, and play with children. Spent meaningful time communicating with them, sharing knowledge, and encouraging learning through fun activities. This experience not only helped in contributing to their growth but also strengthened my sense of empathy, teamwork, and community service.
                        </p>
                      </div>
                      <div className="tabs_let-content">
                        <h2 className="heading-style-h4 text-color-gray100">
                          NSS Camp: Household Survey and Support Initiative
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Participated in an NSS camp where we visited households in a village to understand their needs and challenges related to electricity, food, and daily essentials. We guided villagers by sharing information about various government schemes and policies they could benefit from, helping them connect with available resources while building stronger community awareness.
                        </p>
                      </div>
                      <div className="tabs_let-content">
                        <h2 className="heading-style-h4 text-color-gray100">
                          NSS Camp: Tree Plantation & Environmental Awareness
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Participated in an NSS camp where we planted trees in different areas of the community and interacted with people to spread awareness about the importance of trees and environmental conservation. This initiative promoted eco-friendly practices while fostering a sense of responsibility towards nature and sustainable living.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Videos */}
                  <div className="tabs_right">
                    <div className="tabs_video is-1 w-background-video w-background-video-atom">
                      <img
                        src={pic1}
                        alt="Cloth donation drive"
                        className="tabs_static-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="tabs_video w-background-video w-background-video-atom">
                      <img
                        src={pic2}
                        alt="Nukkad Natak performance"
                        className="tabs_static-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="tabs_video w-background-video w-background-video-atom">
                      <img
                        src={pic3}
                        alt="Village school teaching"
                        className="tabs_static-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    
                    <div className="tabs_video w-background-video w-background-video-atom">
                      <img
                        src={pic4}
                        alt="Household survey"
                        className="tabs_static-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    
                    <div className="tabs_video w-background-video w-background-video-atom">
                      <img
                        src={pic5}
                        alt="Tree plantation"
                        className="tabs_static-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialScroll;