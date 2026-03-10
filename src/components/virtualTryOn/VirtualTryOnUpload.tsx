"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

interface VirtualTryOnUploadProps {
  title: string;
  description: string;
  onPhotoUpload: (photo: string) => void;
  uploadType: "user" | "clothes";
}

export default function VirtualTryOnUpload({
  title,
  description,
  onPhotoUpload,
  uploadType,
}: VirtualTryOnUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
        onPhotoUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-sm md:text-base text-foreground/70">{description}</p>
      </div>

      {!preview ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`relative w-full aspect-video rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center gap-4 p-8 ${
            isDragging
              ? "border-primary-cta bg-primary-cta/10"
              : "border-foreground/20 bg-foreground/5 hover:border-foreground/40 hover:bg-foreground/10"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
            aria-label={`Upload ${uploadType} photo`}
          />
          <div className="text-center">
            <Upload className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary-cta opacity-70" />
            <p className="text-base md:text-lg font-medium text-foreground mb-2">
              {isDragging ? "Drop your photo here" : "Drag & drop or click to upload"}
            </p>
            <p className="text-sm text-foreground/60">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-foreground/20 bg-foreground/5">
          <img
            src={preview}
            alt={`${uploadType} photo preview`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRemovePhoto}
            className="absolute top-3 right-3 p-2 bg-background/80 hover:bg-background rounded-lg transition-colors border border-foreground/20 flex items-center justify-center"
            aria-label="Remove photo"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
            <div className="flex-1 h-1 bg-foreground/20 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary-cta rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-foreground/70">Processing...</span>
          </div>
        </div>
      )}

      <div className="mt-4 p-4 bg-background-accent/40 rounded-lg border border-foreground/10">
        <p className="text-xs md:text-sm text-foreground/70">
          <span className="font-semibold text-foreground">Pro tip:</span> For best results, ensure good
          lighting, wear fitted clothes, and stand in a neutral pose.
        </p>
      </div>
    </div>
  );
}