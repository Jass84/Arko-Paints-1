import React, { useState, useEffect, useRef } from 'react';
import { FaImage, FaVideo, FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [filter, setFilter] = useState('all');
    const galleryGridRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.6,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                }
            });
        }, observerOptions);

        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [filter]);

    // Gallery items with actual images and videos
    const galleryItems = [
        { id: 1, type: 'video', category: 'work', title: 'Work Project Video', description: 'Behind the scenes of our projects', video: '/work-video-1.mp4' },
        { id: 2, type: 'video', category: 'work', title: 'App Development', description: 'Mobile app creation process' ,video: '/work-video-2.mp4'},
        { id: 3, type: 'video', category: 'work', title: 'Professional Services', description: 'Professional video production showcase', video: '/work-video-3.mp4' },
        { id: 4, type: 'video', category: 'office', title: 'Office Space', description: 'Our professional office environment', video: '/work-video-4.mp4' },
        { id: 5, type: 'video', category: 'team', title: 'Team Meeting', description: 'Collaborative work sessions',video: '/work-video-5.mp4'   },
        { id: 6, type: 'video', category: 'events', title: 'Fashion Event', description: 'Professional fashion show coverage',video: '/work-video-6.mp4' },
        { id: 7, type: 'video', category: 'office', title: 'Reception Area', description: 'Welcoming office entrance',video: '/work-video-7.mp4' },
        { id: 8, type: 'image', category: 'team', title: 'Creative Team', description: 'Our talented professionals' ,image: '/office-photo.webp'},
        { id: 9, type: 'image', category: 'events', title: 'Corporate Event', description: 'Professional event management',image: '/port.jpg'},
        { id: 10, type: 'image', category: 'office', title: 'Work Stations', description: 'Collaborative workspaces', image: '/work station.jpg'},
        { id: 11, type: 'image', category: 'team', title: 'Leadership Team', description: 'Experienced management', image: '/team.jpg'},
        { id: 12, type: 'image', category: 'events', title: 'Product Launch', description: 'Successful brand launch', image: '/product.jpg'},
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    const openModal = (item) => {
        setSelectedMedia(item);
    };

    const closeModal = () => {
        setSelectedMedia(null);
    };

    return (
        <div className="gallery-page">
            <div className="page-header">
                <div className="container">
                    <h1>Gallery</h1>
                    <p>Explore Our Work, Office, Team & Events</p>
                </div>
            </div>

            <section className="page gallery">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="gallery-filters">
                        <button
                            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={filter === 'office' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('office')}
                        >
                            Office Photos
                        </button>
                        <button
                            className={filter === 'team' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('team')}
                        >
                            Team Photos
                        </button>
                        <button
                            className={filter === 'work' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('work')}
                        >
                            Work Videos
                        </button>
                        <button
                            className={filter === 'events' ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setFilter('events')}
                        >
                            Event Shoots
                        </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid scroll-snap-container" ref={galleryGridRef}>
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item scroll-snap-item"
                                onClick={() => openModal(item)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="gallery-item-overlay">
                                    {item.type === 'video' ? <FaVideo /> : <FaImage />}
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                {item.type === "image" ? (
                                    <img src={item.image} alt={item.title} className="gallery-actual-image" />
                                ) : item.type === "video" ? (
                                    <video
                                        src={item.video}
                                        className="gallery-actual-video"
                                        controls
                                        controlsList="nodownload noplaybackrate"
                                    />
                                ) : (
                                    <div className="gallery-item-placeholder">
                                        {item.type === 'video' ? (
                                            <div className="video-placeholder">
                                                <FaVideo className="placeholder-icon" />
                                                <span>Video</span>
                                            </div>
                                        ) : (
                                            <div className="image-placeholder">
                                                <FaImage className="placeholder-icon" />
                                                <span>Image</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="no-items">
                            <p>No items found in this category.</p>
                        </div>
                    )}

                    {/* Info Box */}
                    <div className="info-box">
                        <h3>📸 Coming Soon</h3>
                        <p>
                            We are currently updating our gallery with high-quality photos and videos
                            of our office, team, and work projects. Check back soon for more content!
                        </p>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedMedia && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className="modal-body">
                            {selectedMedia.video ? (
                                <video src={selectedMedia.video} controls className="modal-actual-video" />
                            ) : selectedMedia.image ? (
                                <img src={selectedMedia.image} alt={selectedMedia.title} className="modal-actual-image" />
                            ) : selectedMedia.type === 'video' ? (
                                <div className="modal-video-placeholder">
                                    <FaVideo className="modal-placeholder-icon" />
                                    <p>Video: {selectedMedia.title}</p>
                                </div>
                            ) : (
                                <div className="modal-image-placeholder">
                                    <FaImage className="modal-placeholder-icon" />
                                    <p>Image: {selectedMedia.title}</p>
                                </div>
                            )}
                            <div className="modal-info">
                                <h3>{selectedMedia.title}</h3>
                                <p>{selectedMedia.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
