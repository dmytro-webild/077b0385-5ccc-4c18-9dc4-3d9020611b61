"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Download, Share2, RotateCcw } from "lucide-react";

interface VirtualTryOnPreviewProps {
  userPhoto: string | null;
  clothesPhoto: string | null;
  onBack: () => void;
}

export default function VirtualTryOnPreview({
  userPhoto,
  clothesPhoto,
  onBack,
}: VirtualTryOnPreviewProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [selectedFit, setSelectedFit] = useState<"tight" | "normal" | "loose">("normal");

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      setIsProcessing(false);
      // Create a simple composite preview
      if (userPhoto && clothesPhoto) {
        // In a real implementation, this would use server-side image processing
        setPreviewImage(userPhoto);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [userPhoto, clothesPhoto]);

  const handleDownload = () => {
    if (previewImage) {
      const link = document.createElement("a");
      link.href = previewImage;
      link.download = "virtual-tryon-result.png";
      link.click();
    }
  };

  const handleShare = () => {
    if (navigator.share && previewImage) {
      navigator.share({
        title: "My Virtual Try-On",        text: "Check out how I look in these clothes!"});
    } else {
      // Fallback: copy to clipboard
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const handleFitChange = (fit: "tight" | "normal" | "loose") => {
    setSelectedFit(fit);
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 1500);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Your Virtual Try-On</h2>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all text-foreground text-sm"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Preview Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preview Image */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-foreground/20 bg-gradient-to-br from-foreground/5 to-background/20">
            {isProcessing ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/40 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full border-4 border-foreground/20 border-t-primary-cta animate-spin"></div>
                <p className="text-foreground text-center text-sm md:text-base">
                  Processing your virtual try-on with AI technology...
                </p>
              </div>
            ) : previewImage ? (
              <>
                <img
                  src={previewImage}
                  alt="Virtual try-on preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
              </>
            ) : null}
          </div>

          {/* Details Below Preview */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-foreground/5 border border-foreground/10">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2">Your Photo</p>
              <div className="w-full aspect-square rounded-lg overflow-hidden border border-foreground/20 bg-foreground/5">
                {userPhoto && (
                  <img
                    src={userPhoto}
                    alt="Your photo"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-foreground/5 border border-foreground/10">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2">Clothes</p>
              <div className="w-full aspect-square rounded-lg overflow-hidden border border-foreground/20 bg-foreground/5">
                {clothesPhoto && (
                  <img
                    src={clothesPhoto}
                    alt="Clothes photo"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="flex flex-col gap-6">
          {/* Fit Selector */}
          <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Fit Preference
            </h3>
            <div className="flex flex-col gap-3">
              {(["tight", "normal", "loose"] as const).map((fit) => (
                <button
                  key={fit}
                  onClick={() => handleFitChange(fit)}
                  className={`px-4 py-3 rounded-lg transition-all text-sm font-medium capitalize border-2 ${
                    selectedFit === fit
                      ? "border-primary-cta bg-primary-cta/10 text-foreground"
                      : "border-foreground/20 bg-background text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {fit}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full px-4 py-3 rounded-lg bg-primary-cta text-background font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="Download result"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button
              onClick={handleShare}
              className="w-full px-4 py-3 rounded-lg bg-foreground/10 border border-foreground/20 text-foreground font-medium flex items-center justify-center gap-2 hover:border-foreground/40 hover:bg-foreground/15 transition-all"
              aria-label="Share result"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button
              onClick={onBack}
              className="w-full px-4 py-3 rounded-lg bg-foreground/10 border border-foreground/20 text-foreground font-medium flex items-center justify-center gap-2 hover:border-foreground/40 hover:bg-foreground/15 transition-all"
              aria-label="Try again"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>

          {/* Info Box */}
          <div className="p-4 rounded-lg bg-background-accent/40 border border-foreground/10">
            <p className="text-xs text-foreground/70 leading-relaxed">
              <span className="font-semibold text-foreground block mb-2">Accuracy:</span>
              This preview is powered by advanced AI. The actual fit may vary based on fabric properties and your exact measurements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}