import React, { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import "./FaceExpression.scss";

const MOOD_CONFIG = {
    happy:          { emoji: "😊", label: "Happy",      color: "#f59e0b" },
    sad:            { emoji: "😢", label: "Sad",        color: "#60a5fa" },
    surprised:      { emoji: "😲", label: "Surprised",  color: "#a78bfa" },
    Neutral:        { emoji: "😐", label: "Neutral",    color: "#6b7280" },
    "Detecting...": { emoji: "👁",  label: "Detecting…", color: "#6b7280" },
};

function FaceExpression({ onClick = () => {} }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);
    const hasInitialized = useRef(false); // ← one-time gate
    const [expression, setExpression] = useState("Detecting...");
    const [isReady, setIsReady] = useState(false);
    const [isDetecting, setIsDetecting] = useState(false);

    useEffect(() => {
        // If already initialized (StrictMode double-mount), skip
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        init({ landmarkerRef, videoRef, streamRef })
            .then(() => {
                setIsReady(true);
            })
            .catch((err) => {
                console.error("Face model init failed:", err);
            });

        return () => {
            // Only clean up if stream actually started
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
                streamRef.current = null;
            }
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
                landmarkerRef.current = null;
            }
        };
    }, []);

    async function handleClick() {
        setIsDetecting(true);
        const expr = detect({ landmarkerRef, videoRef, setExpression });
        onClick(expr);
        setTimeout(() => setIsDetecting(false), 800);
    }

    const mood = MOOD_CONFIG[expression] || MOOD_CONFIG["Neutral"];

    return (
        <div className="face-expression">
            <div className="face-expression__camera-wrap">
                <video ref={videoRef} className="face-expression__video" playsInline />
                {!isReady && (
                    <div className="face-expression__loading">
                        <div className="face-expression__spinner" />
                        <span>Loading face model…</span>
                    </div>
                )}
                <div className="face-expression__scan-line" />
            </div>

            <div className="face-expression__mood-display">
                <span className="face-expression__emoji"
                    style={{ filter: `drop-shadow(0 0 12px ${mood.color}80)` }}>
                    {mood.emoji}
                </span>
                <div className="face-expression__mood-info">
                    <span className="face-expression__mood-label">Detected mood</span>
                    <span className="face-expression__mood-value" style={{ color: mood.color }}>
                        {mood.label}
                    </span>
                </div>
            </div>

            <button
                className={`face-expression__btn ${isDetecting ? 'face-expression__btn--detecting' : ''}`}
                onClick={handleClick}
                disabled={!isReady || isDetecting}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M3 9a9 9 0 0 1 9-6 9 9 0 0 1 9 6"/>
                    <path d="M3 15a9 9 0 0 0 9 6 9 9 0 0 0 9-6"/>
                </svg>
                {isDetecting ? 'Detecting…' : 'Detect my mood'}
            </button>
        </div>
    );
}

export default React.memo(FaceExpression);