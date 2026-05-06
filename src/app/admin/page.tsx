"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./admin.module.css";

interface Video {
  id: string;
  youtubeId: string;
  artist: string;
  category: string;
  title: string;
  description: string;
  createdAt: string;
}

interface VideosData {
  sessions: Video[];
  interviews: Video[];
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [videos, setVideos] = useState<VideosData>({ sessions: [], interviews: [] });
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [activeTab, setActiveTab] = useState<"sessions" | "interviews">("sessions");

  // Form state
  const [formYoutubeUrl, setFormYoutubeUrl] = useState("");
  const [formArtist, setFormArtist] = useState("");
  const [formCategory, setFormCategory] = useState("1Life Sessions");
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const fetchVideos = useCallback(async () => {
    try {
      const res = await fetch("/api/videos");
      if (res.ok) {
        const data = await res.json();
        setVideos(data);
      }
    } catch {
      console.error("Failed to fetch videos");
    }
  }, []);

  // Check auth status on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth");
        if (res.ok) {
          setAuthenticated(true);
          fetchVideos();
        }
      } catch {
        // not authenticated
      }
      setChecking(false);
    }
    checkAuth();
  }, [fetchVideos]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setAuthenticated(true);
        fetchVideos();
      } else {
        setLoginError("Invalid username or password");
      }
    } catch {
      setLoginError("Connection failed. Please try again.");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const extractYoutubeId = (url: string): string => {
    // Handle various YouTube URL formats
    const patterns = [
      /youtu\.be\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]+)/,
    ];
    for (const p of patterns) {
      const match = url.match(p);
      if (match) return match[1];
    }
    // Assume raw ID if no URL pattern matched
    return url;
  };

  const resetForm = () => {
    setFormYoutubeUrl("");
    setFormArtist("");
    setFormCategory("1Life Sessions");
    setFormTitle("");
    setFormDescription("");
    setEditingVideo(null);
    setShowForm(false);
    setFormMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage("");

    const youtubeId = extractYoutubeId(formYoutubeUrl);

    if (editingVideo) {
      // Update
      try {
        const res = await fetch(`/api/videos/${editingVideo.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            youtubeId,
            artist: formArtist,
            category: formCategory,
            title: formTitle,
            description: formDescription,
          }),
        });
        if (res.ok) {
          setFormMessage("Video updated successfully!");
          fetchVideos();
          setTimeout(resetForm, 1200);
        } else {
          setFormMessage("Failed to update video.");
        }
      } catch {
        setFormMessage("Error updating video.");
      }
    } else {
      // Create
      try {
        const res = await fetch("/api/videos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            youtubeId,
            artist: formArtist,
            category: formCategory,
            title: formTitle,
            description: formDescription,
          }),
        });
        if (res.ok) {
          setFormMessage("Video added successfully!");
          fetchVideos();
          setTimeout(resetForm, 1200);
        } else {
          setFormMessage("Failed to add video.");
        }
      } catch {
        setFormMessage("Error adding video.");
      }
    }
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setFormYoutubeUrl(`https://youtu.be/${video.youtubeId}`);
    setFormArtist(video.artist);
    setFormCategory(video.category);
    setFormTitle(video.title);
    setFormDescription(video.description);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    try {
      const res = await fetch(`/api/videos/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchVideos();
      }
    } catch {
      console.error("Failed to delete video");
    }
  };

  if (checking) {
    return (
      <main className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>Checking authentication...</p>
        </div>
      </main>
    );
  }

  // Login Screen
  if (!authenticated) {
    return (
      <main className={styles.container}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginCard}>
            <div className={styles.loginLogo}>
              <img src="/images/LOGO.png" alt="1Life Network" />
            </div>
            <h1>Admin Dashboard</h1>
            <p className={styles.loginSub}>Sign in to manage content</p>

            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              {loginError && <p className={styles.error}>{loginError}</p>}
              <button type="submit" className={styles.loginBtn}>Sign In</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // Dashboard
  const totalVideos = videos.sessions.length + videos.interviews.length;
  const currentVideos = activeTab === "sessions" ? videos.sessions : videos.interviews;

  return (
    <main className={styles.container}>
      {/* Topbar */}
      <header className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <img src="/images/LOGO.png" alt="1Life" className={styles.topbarLogo} />
          <span className={styles.topbarTitle}>Content Dashboard</span>
        </div>
        <div className={styles.topbarRight}>
          <span className={styles.topbarUser}>Admin</span>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <div className={styles.dashboard}>
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{totalVideos}</span>
            <span className={styles.statLabel}>Total Videos</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{videos.sessions.length}</span>
            <span className={styles.statLabel}>Sessions</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{videos.interviews.length}</span>
            <span className={styles.statLabel}>Interviews</span>
          </div>
          <div className={`${styles.statCard} ${styles.statAccent}`}>
            <button
              className={styles.addBtn}
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
            >
              + Add Video
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "sessions" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("sessions")}
          >
            Sessions ({videos.sessions.length})
          </button>
          <button
            className={`${styles.tab} ${activeTab === "interviews" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("interviews")}
          >
            Interviews ({videos.interviews.length})
          </button>
        </div>

        {/* Video List */}
        <div className={styles.videoGrid}>
          {currentVideos.length === 0 && (
            <div className={styles.emptyState}>
              <p>No {activeTab} yet. Add your first video!</p>
            </div>
          )}
          {currentVideos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                />
                <span className={styles.videoBadge}>{video.category}</span>
              </div>
              <div className={styles.videoInfo}>
                <h3>{video.title}</h3>
                <p className={styles.videoArtist}>{video.artist}</p>
                <p className={styles.videoDesc}>{video.description}</p>
                <div className={styles.videoActions}>
                  <button
                    onClick={() => handleEdit(video)}
                    className={styles.editBtn}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                  <a
                    href={`https://youtu.be/${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    View ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className={styles.overlay} onClick={() => resetForm()}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingVideo ? "Edit Video" : "Add New Video"}</h2>
              <button onClick={resetForm} className={styles.closeBtn}>×</button>
            </div>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="youtubeUrl">YouTube URL or Video ID</label>
                <input
                  id="youtubeUrl"
                  type="text"
                  value={formYoutubeUrl}
                  onChange={(e) => setFormYoutubeUrl(e.target.value)}
                  placeholder="https://youtu.be/xxxxx or video ID"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="artistName">Artist Name</label>
                  <input
                    id="artistName"
                    type="text"
                    value={formArtist}
                    onChange={(e) => setFormArtist(e.target.value)}
                    placeholder="e.g. KiKi Celine"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="videoCategory">Destination Section</label>
                  <select
                    id="videoCategory"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                  >
                    <option value="1Life Sessions">Watch &rarr; Sessions</option>
                    <option value="1Life Interviews">Watch &rarr; Interviews</option>
                  </select>
                  <span className={styles.hint}>Controls which section of the Watch page this appears in.</span>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="videoTitle">Title</label>
                <input
                  id="videoTitle"
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Fragile (Live Band)"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="videoDescription">Description</label>
                <textarea
                  id="videoDescription"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Brief description of the video..."
                  rows={3}
                />
              </div>

              {/* Real-time Card Preview */}
              {formYoutubeUrl && (
                <div className={styles.preview}>
                  <div className={styles.previewLabel}>
                    Live Preview
                    <span>Matches Site View</span>
                  </div>
                  
                  <div className={styles.cardPreview}>
                    <div 
                      className={styles.cardThumb} 
                      style={{ 
                        backgroundImage: `url(https://img.youtube.com/vi/${extractYoutubeId(formYoutubeUrl)}/maxresdefault.jpg)` 
                      }}
                    >
                      {formArtist && <div className={styles.cardArtist}>{formArtist}</div>}
                      <div className={styles.cardPlayBtn}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardCategory}>{formCategory}</div>
                      <h4 className={styles.cardTitle}>{formTitle || "Untitled Session"}</h4>
                      <p className={styles.cardDesc}>
                        {formDescription || "Description will appear here..."}
                      </p>
                      <div className={styles.cardAction}>Watch on YouTube</div>
                    </div>
                  </div>
                </div>
              )}

              {formMessage && (
                <p className={formMessage.includes("success") ? styles.success : styles.error}>
                  {formMessage}
                </p>
              )}

              <div className={styles.formActions}>
                <button type="button" onClick={resetForm} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  {editingVideo ? "Update Video" : "Add Video"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
